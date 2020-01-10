
exports.seed = async (knex) => {
  await knex('steps').insert([
    {id: 1, recipe_id: 1, step_number: 1, description: "Pour into glass"},
    {id: 2, recipe_id: 1, step_number: 2, description: "Pour into glass until milk looks sufficiently chocolatey"},
    {id: 3, recipe_id: 2, step_number: 1, description: "Pour dry ingredient into bowl"},
    {id: 4, recipe_id: 2, step_number: 2, description: "Pour wet ingredient into bowl"},
    {id: 5, recipe_id: 3, step_number: 1, description: "Toast bread until golden brown"},
    {id: 6, recipe_id: 3, step_number: 2, description: "Spread butter over bread"}
  ])
};
