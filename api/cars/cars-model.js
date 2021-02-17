const db = require("../../data/dbConfig");

module.exports = {
    get(){
        return db("cars");
    },
    create(car){
        return db('cars').insert(car);
    }
};