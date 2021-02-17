
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {VIN: "K5HS39KY05JS32J54", make: "Nissan", model: 'Sentra', mileage: 35000, title: null},
        {VIN: "J5HJK76KL43K2189F", make: "Hyundai", model: 'SantaFe', mileage: 43000, title: "clean"},
        {VIN: "GEL863JEG38LK95UN", make: "Toyota", model: 'Tundra', mileage: 55000, title: "salvage"}
      ]);
    });
};
