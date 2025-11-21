import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("posts", (table) => {
    table.string("format", 20).defaultTo("markdown").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("posts", (table) => {
    table.dropColumn("format");
  });
}
