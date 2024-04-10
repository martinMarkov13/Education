const router = require("express").Router();
const bookService = require("../services/bookService");
const { isAuth } = require("../middlewares/authMiddleware");
const { getErrorMessage } = require("../utils/errorHelpers");

router.get("/catalog", async (req, res) => {
  const books = await bookService.getAll();
  res.render("books/catalog", { books });
});

router.get("/create", isAuth, (req, res) => {
  res.render("books/create");
});

router.post("/create", isAuth, async (req, res) => {
  const bookData = req.body;
  const owner = req.user._id;

  try {
    await bookService.create({ ...bookData, owner });
    res.redirect("/books/catalog");
  } catch (err) {
    res.render("books/create", { error: getErrorMessage(err) });
  }
});

router.get("/:bookId/delete", async (req, res) => {
  try {
    await bookService.deleteOne(req.params.bookId);

    res.redirect("/books/catalog");
  } catch (err) {

    res.render("books/details", { book, error: getErrorMessage(err) });
  }
});

router.get("/:bookId/details", async (req, res) => {
  const book = await bookService.getOne(req.params.bookId);
  const user = req.user?._id;

  const isCreator = book.owner._id == user;

  const isWished = book.wishingLst.toString().includes(user);

  res.render("books/details", { book, isCreator, isWished });
});

router.get("/:bookId/wish", async (req, res) => {
  const book = await bookService.wishBook(req.params.bookId);
  const user = req.user._id;

  book.wishingLst.push(user);

  await book.save();

  res.redirect(`/books/${req.params.bookId}/details`);
});

router.get('/:bookId/edit', async (req, res) => {
  const book = await bookService.getOne(req.params.bookId);

    res.render('books/edit', {book})
})

router.post('/:bookId/edit', async (req, res) => {
    const updateData = req.body;
    const bookId = req.params.bookId;

    const book = await bookService.getOne(req.params.bookId);

    try{
        await bookService.updateBook(bookId, updateData)
        res.redirect(`/books/${bookId}/details`)
    }catch(err){
        res.render('books/edit', {book, error: getErrorMessage(err) })
    }
})

module.exports = router;
