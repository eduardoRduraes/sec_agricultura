import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("professional", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("address").notNullable();
    table.string("profession").notNullable();
    table.boolean("status").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('professional');
}

