
import knex from 'knex';

const db = knex({
  client: 'pg',
  version: '8.3.2',
  connection: {
    host: "127.0.0.1",
    user: "pg",
    password: "pg",
    database: "pgdb"
  },
  useNullAsDefault: true,
});

export default db;