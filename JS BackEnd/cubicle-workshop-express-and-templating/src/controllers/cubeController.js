const router = require("express").Router();
const cubeService = require("../services/cubeService");

// Path /cubes/create but it's fixed in index.js
router.get("/create", (req, res) => {
    console.log(cubeService.getAll());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  cubeService.createCube({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });

  res.redirect("/");
});

module.exports = router;
