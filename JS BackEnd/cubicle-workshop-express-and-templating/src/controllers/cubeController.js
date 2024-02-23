const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/authMiddleware");
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
const { getDifficultyOptions } = require("../utils/viewHelper");

// Path /cubes/create but it's fixed in index.js
router.get("/create", isAuthenticated, (req, res) => {
  res.render("cube/create", {});
});

router.post("/create", isAuthenticated, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });

  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeService
    .getOneWithAccessories(req.params.cubeId)
    .lean();

  if (!cube) {
    return res.redirect("/404");
  }

  const isOwner = cube.owner == req.user._id;

  res.render("cube/details", { cube, isOwner });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();
  const accessories = await accessoryService
    .getNotAttached(cube.accessories)
    .lean();

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { accessory } = req.body;

  const cubeId = req.params.cubeId;

  await cubeService.attachAccessory(cubeId, accessory);
  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/:cubeId/delete", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();

  const options = getDifficultyOptions(cube.difficultyLevel);

  res.render("cube/delete", { cube, options });
});

router.post("/:cubeId/delete", async (req, res) => {
  await cubeService.delete(req.params.cubeId);

  res.redirect("/");
});

router.get("/:cubeId/edit", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();

  if(cube.owner != req.user._id ) {
    return res.redirect('/404')
  }

  const options = getDifficultyOptions(cube.difficultyLevel);

  res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", async (req, res) => {
  const cubeData = req.body;

  await cubeService.update(req.params.cubeId, cubeData);

  res.redirect(`/cubes/${req.params.cubeId}/details`);
});

module.exports = router;
