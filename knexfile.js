// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "Yazi2021",
      database: "postgres",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "Yazi2021",
      database: "postgres",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "Yazi2021",
      database: "postgres",
    },
  },
};
