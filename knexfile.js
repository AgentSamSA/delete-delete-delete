module.exports = {
  //for machine
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3', //sqlite3 specific
    },
    useNullAsDefault: true, //sqlite3 specific
    migrations: { //files where we evolve database step by step over time
      directory: './data/migrations',
    },
    seeds: { //mock data to populate our dev db
      directory: './data/seeds',
    },
  },
  // for heroku
  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  }
};
