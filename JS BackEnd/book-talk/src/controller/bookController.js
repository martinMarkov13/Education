const router = require("express").Router()
const bookService = require('../services/bookService')
const {isAuth} = require('../middlewares/authMiddleware')
const {getErrorMessage} = require('../utils/errorHelpers')

router.get('/catalog', async (req, res) => {
    const books = await bookService.getAll()
    res.render('books/catalog', { books })
})

router.get('/create', isAuth, (req, res) => {
    res.render('books/create')
})

router.post('/create', isAuth, async (req, res) => {
    const bookData = req.body;
    const owner = req.user._id;

    try{
        await bookService.create({...bookData, owner})
        res.redirect('/books/catalog')
    }catch(err){
        res.render('books/create', {error: getErrorMessage(err)})
    }

})

router.get('/:bookId/delete', async (req, res) => {
    try{
        const book = await bookService.deleteOne(req.params.bookId)
        res.redirect('/books/catalog')
    }catch(err){
        res.render('books/details', {book, error: getErrorMessage(err)})
    }
})

router.get('/:bookId/details', async (req, res) => {
    const book = await bookService.getOne(req.params.bookId)

    const isCreator = book.owner._id == req.user?._id;


    res.render('books/details', {book, isCreator})
})

module.exports = router;