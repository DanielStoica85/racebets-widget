const mongoose = require('mongoose');

const runnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    odds: {
        type: Number,
        required: true
    },
    silk: {
        type: String,
        default: ''
    }
})