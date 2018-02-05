const express = require('express');
const router = express.Router();

const helpers = require('../helpers/races');

// Get next races
router.get('/', helpers.getRaces);

// Add a race
router.post('/', helpers.addRace);

// Delete a race
router.delete('/:raceId', helpers.deleteRace);

module.exports = router;