const express = require('express');
const bookController = require('../controller/book');

const bookRouter = express.Router();

bookRouter.post('/book', bookController.createBook);

bookRouter.get('/book', bookController.getAllBooks);

bookRouter.get('/book/:id', bookController.getOneBook);

module.exports = bookRouter;