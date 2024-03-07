const router = require("express").Router();
const photoService = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/catalog", async (req, res) => {
  const photos = await photoService.getAll().lean();

  res.render("photos/catalog", { photos });
});

router.get("/create", (req, res) => {
  res.render("photos/create");
});

router.post("/create", async (req, res) => {
  const photoData = req.body;
  const owner = req.user._id;

  try {
    await photoService.createPhoto({ ...photoData, owner });

    res.redirect("/photos/catalog");
  } catch (err) {
    res.render("photos/create", { error: getErrorMessage(err) });
  }
});

router.get("/:photoId/details", async (req, res) => {
  const photoId = req.params.photoId;

  const photo = await photoService.getOne(photoId).lean();

  const isOwner = req.user?._id == photo.owner._id;

  res.render(`photos/details`, { photo, isOwner });
});

module.exports = router;
