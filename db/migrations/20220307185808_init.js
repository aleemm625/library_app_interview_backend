// npx knex migrate:make init --migrations-directory db/migrations
exports.up = async function (knex) {
    const student =await knex.schema.createTable('student', (table) => {
      table.increments('id');
    //   table.string('email').notNullable().unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.timestamps(true, true);
    });
    const book =await knex.schema.createTable('book', (table) => {
        table.increments('id');
        table.string('book_name').notNullable();
        table.string('author').notNullable();
        table.string('borrowed_by');
        table.date('borrow_date');
        table.date('return_date');
        table.timestamps(true, true);
      });
      return [student, book]
  };
  
  exports.down = async function (knex) {
    const student = await knex.schema.dropTable('student');
    const book = await knex.schema.dropTable('book');
    return [student,book]
  };