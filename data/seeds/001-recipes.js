
exports.seed = async (knex) => {
  await knex('recipes').insert([
    {id: 1, name: 'Chocolate Milk'},
    {id: 2, name: 'Cereal'},
    {id: 3, name: 'Toast'}
  ])
};
