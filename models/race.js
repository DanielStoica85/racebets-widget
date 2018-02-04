const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    event: {
        title: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    race_type: {
        type: String,
        required: true
    },
    post_time: {
        type: Date,
        default: true
    },
    num_runners: {
        type: Number,
        default: true
    },
    distance: {
        type: Number,
        default: true
    },
    purse: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    runners: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Runner'
    }]
});