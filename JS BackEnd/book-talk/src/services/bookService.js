const Book = require('../models/Book')

exports.getAll = () => Book.find().lean();

exports.create = (bookData) => Book.create(bookData);

exports.deleteOne = (book) => Book.findByIdAndDelete(book);

exports.getOne = (book) => Book.findById(book).populate('owner').lean()