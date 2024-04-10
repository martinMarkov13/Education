const Book = require('../models/Book')

exports.getAll = () => Book.find().lean();

exports.create = (bookData) => Book.create(bookData);

exports.deleteOne = (book) => Book.findByIdAndDelete(book);

exports.getOne = (book) => Book.findById(book).populate('owner').lean()

exports.wishBook = (book) => Book.findById(book).populate('owner')

exports.updateBook = (book, updateData) => Book.findByIdAndUpdate(book, updateData, { runValidators: true })

exports.getWished = async (user) => {
    let books = await Book.find().lean()
    
    return books.filter(b => b.wishingLst.toString().includes(user._id))
}
