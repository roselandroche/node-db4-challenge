
exports.seed = async (knex) => {
  await knex('recipes_ingredients').insert([
    {recipes_id: 1, ingredients_id: 1},
    {recipes_id: 1, ingredients_id: 2},
    {recipes_id: 2, ingredients_id: 1},
    {recipes_id: 2, ingredients_id: 3},
    {recipes_id: 3, ingredients_id: 4},
    {recipes_id: 3, ingredients_id: 5},
  ])
};
