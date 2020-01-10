
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.string("name").notNull()
    })
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.string("name").notNull()
        table.string("amount").notNull()
        table.string("unit").notNull()
    })
    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
        table.integer("step_number")
        table.text("description")
    })
    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipes_id")
            .notNull()
            .references("id")
            .inTable("recipes")
        table.integer("ingredients_id")
            .notNull()
            .references("id")
            .inTable("ingredients")
        table.primary(["recipes_id", "ingredients_id"])
    })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
