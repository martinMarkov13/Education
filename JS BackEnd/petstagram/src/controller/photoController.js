const router = require("express").Router();
const photoService = require("../services/photoService");
const { getErrorMessage } = require("../utils/errorHelpers");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/catalog", async (req, res) => {
  const photos = await photoService.getAll().lean();

  res.render("photos/catalog", { photos });
});

router.get("/create", isAuth, (req, res) => { 
  res.render("photos/create");
});

router.post("/create", isAuth, async (req, res) => {
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
  const photo = await photoService.getOne(photoId).populate('commentList.user').lean();
  const isOwner = req.user?._id == photo.owner._id;

  res.render(`photos/details`, { photo, isOwner });
});

router.get("/:photoId/delete", isAuth, async (req, res) => {
  const photoId = req.params.photoId;
  const photo = await photoService.getOne(photoId).lean();

  await photoService.deletePhoto(photoId);

  res.redirect("/photos/catalog");
});

router.get("/:photoId/edit", isAuth, async (req, res) => {
  const photoId = req.params.photoId;
  const photo = await photoService.getOne(photoId).lean();

  res.render("photos/edit", { photo });
});

router.post("/:photoId/edit", async (req, res) => {
  const photoId = req.params.photoId;
  const photoData = req.body;

  await photoService.editPhoto(photoId, photoData);

  res.redirect(`/photos/${photoId}/details`);
});

router.post("/:photoId/comments", async (req, res) => {
  const photoId = req.params.photoId;
  const { comment } = req.body;
  const user = req.user._id;
  const photo = await photoService.getOne(photoId).populate('commentList.user').lean();

  try{
      await photoService.addComment(photoId, { user, comment });

      res.redirect(`/photos/${photoId}/details`);
      
  }catch(err) {
      res.render(`photos/details`, { photo, error: getErrorMessage(err)});
  }
});

module.exports = router;
