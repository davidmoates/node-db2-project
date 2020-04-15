exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { "vin": "abc123", "make": "Chevy", "model": "s10", "mileage": 123456, "transmission": "auto","title": "good" },
    { "vin": "def456", "make": "Ford", "model": "f150", "mileage": 123456, "transmission": "auto","title": "good" },
    { "vin": "ghi789", "make": "Dodge", "model": "ram", "mileage": 123456, "transmission": "auto","title": "good" }
  ])
};
