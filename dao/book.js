const db = require('../db/db');

class BookDAO {
  async createBook(bookName, author, studentName, borrowDate, returnDate) {
    const [book] = await db('book')
      .insert({
        book_name: bookName,
        author: author,
        borrowed_by: studentName,
        borrow_date: borrowDate,
        return_date: returnDate
      })
      .returning(['id','book_name','author', 'borrowed_by', 'borrow_date', 'return_date']);

    return book || {};
  }

  async getAllBooks() {
      const books = await db('book')
      .select('id','book_name','author', 'borrowed_by', 'borrow_date', 'return_date')

      return books || [];
    }

    async getOneBook(id) {
        const [book] = await db('book')
        .select('id','book_name','author', 'borrowed_by', 'borrow_date', 'return_date').where({id})

        return book || {};
    }

    async getOneBookByName(bookName) {
        console.log(bookName);
        const [book] = await db('book')
        .select('id','book_name', 'author', 'borrowed_by', 'borrow_date', 'return_date')
        .where({book_name:bookName})
    
        return book || {};
    }
}

module.exports = new BookDAO();