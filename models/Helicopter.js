const mongoose = require('mongoose');

const HelicopterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const Helicopter = mongoose.model('Helicopter', HelicopterSchema);

module.exports = Helicopter;