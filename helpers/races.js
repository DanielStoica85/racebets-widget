const db = require("../models");

exports.getRaces = (req, res) => {
    db.Race.find()
        .then((races) => {
            races.forEach((race) => {
                race.post_time = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 3600) + 1;
            });
            res.json({
                status: "success",
                data: {
                    races: races
                }
            });
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.addRace = (req, res) => {
    db.Race.create(req.body)
        .then((newRace) => {
            res.status(201).json(newRace);
            console.log('Added new race!');
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.deleteRace = (req, res) => {
    db.Race.remove({
        _id: req.params.raceId
    }).then(() => {
        res.json({
            status: "success",
            message: 'Race deleted.'
        });
    }).catch((err) => {
        res.json({
            status: "error",
            message: err
        });
    })
}

module.exports = exports;