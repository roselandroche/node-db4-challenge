
exports.seed = async (knex) => {
  await knex('ingredients').insert([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Chocolate Syrup'},
    {id: 3, name: 'Dry Cereal'},
    {id: 4, name: 'Bread'},
    {id: 5, name: 'Butter'}
  ])
};
