const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        comment: String,
        mon: Number,
        tue: Number,
        wed: Number,
        thu: Number,
        fri: Number,
        sat: Number,
        sun: Number,
    }
);

module.exports = mongoose.model('Data', dataSchema);