const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    id_race: {
        type: Number,
        required: true
    },
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
        type: Number,
        default: Math.floor(Date.now() / 1000)
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
        id_runner: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        odds: {
            type: Number,
            required: true
        },
        silk: {
            type: String,
            default: ''
        }
    }]
});

const Race = mongoose.model("Race", raceSchema);

module.exports = Race;