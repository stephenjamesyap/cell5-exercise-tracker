const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    description: { type: String, required: true},
    duration: { type: Number, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;