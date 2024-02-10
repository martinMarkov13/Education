const router = require("express").Router();

const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

// Path /cubes/create but it's fixed in index.js
router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeService.getOneWithAccessories(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", {cube});
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();
  const accessories = await accessoryService.getAll().lean();

 const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res)=>{
  const { accessory } = req.body;

  const cubeId = req.params.cubeId

  await cubeService.attachAccessory(cubeId, accessory)
  res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router;
