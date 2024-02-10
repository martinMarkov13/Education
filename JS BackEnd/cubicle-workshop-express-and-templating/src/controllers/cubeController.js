const router = require("express").Router();
const cubeService = require("../services/cubeService");

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
  const cube = await cubeService.getOne(req.params.cubeId).lean();

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", cube);
});

router.get("/:cubeId/attach-accessory", (req, res) => {
  res.render('accessory/attach')
});

module.exports = router;
