const express = require('express');
const router = express.Router();

const helpers = require('../db/races');

// Get next races
router.get('/', db.getRaces);