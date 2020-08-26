import * as Knex from "knex";

export async function seed(knex: Knex) {
  await knex('professional').insert([
    { name: "Eduardo R Duraes", address: "Rua Ceará 1093 centro", profession: "Tecnico em Informatica", status: "true" },
    { name: "Eliane Ap. M. de Melo", address: "Rua Ceará 1093 centro", profession: "Ass. administrativo", status: "true" },
    { name: "Bruna Massala", address: "Rua Floresta", profession: "Veterinaria", status: "true" },
    { name: "Antônio Reibe", address: "Rua Central", profession: "Tecnico em agropecuaria", status: "true" },
  ]);
}