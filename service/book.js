const BookDAO = require('../dao/book');

class BookSerice{
    async createBook(BookDto) {
        try {
            const {bookName, author, borrowedBy=null, borrowDate=null, returnDate=null} = BookDto;
            console.log(BookDto);
            const dbBook = await BookDAO.getOneBookByName(bookName);
            if(!dbBook || Object.keys(dbBook).length === 0){
                return await BookDAO.createBook(bookName, author, borrowedBy, borrowDate, returnDate);    
            }
            
            return {error:'book alread exists'};    
        } catch (error) {
            return error;
        }
    }

    async getAllBooks(){
        try {
            const books = await BookDAO.getAllBooks();

            return books;
        } catch (error) {
            return error;
        }
    }

    async getOneBook(BookDto){
        try {
            const {id} = BookDto;
            const book = await BookDAO.getOneBook(id);
            if(!book || Object.keys(book).length === 0){
                return {msg:'book not found'}
            }

            return book;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new BookSerice();