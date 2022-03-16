// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // TODO change to your db name
      database: 'mini_book_library',

      // change to your db user
      user: 'postgres',
      password: '1996',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'mini_book_library_migrations',
    },
  },
};