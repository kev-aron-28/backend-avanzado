const { Schema, model } = require('mongoose');

const PetModel = Schema({
    name: {
        type: String,
    },
    owner: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = model('Pet', PetModel)