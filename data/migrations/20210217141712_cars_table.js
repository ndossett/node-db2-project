
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        table.increments();
        table.char("VIN", 17).unique().notNullable();
        table.text("make", 128).notNullable();
        table.text("model", 128).notNullable();
        table.decimal("mileage", 128).notNullable();
        table.text("title", 128);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
