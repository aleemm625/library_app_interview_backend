const bookService = require('../service/book');

class BookController {
    
    async createBook(req,res) {
        try {
            const book = await bookService.createBook(req?.body);
            console.log(book);

            res.status(201).json(book);
        } catch (error) {
            console.log(error)

            res.status(500).json({error});
        }
    }  

    async getAllBooks(req, res) {
        try {
            const books = await bookService.getAllBooks();
            console.log(books);

            res.status(200).json(books);
        } catch (error) {
            console.log(error)
            
            res.status(500).json({error});
        }
    }

    async getOneBook(req, res){
        try {
            const book = await bookService.getOneBook(req?.params);
            console.log(book);

            res.status(200).json(book);
        } catch (error) {
            console.log(error)
            
            res.status(500).json({error});
        }
    }

}

module.exports = new BookController();
