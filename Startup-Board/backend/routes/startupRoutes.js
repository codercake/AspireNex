const express = require('express');
const { createStartup, getStartups, getStartupById, updateStartup, deleteStartup } = require('../controllers/startupController');
const router = express.Router();

router.post('/', createStartup);
router.get('/', getStartups);
router.get('/:id', getStartupById);
router.put('/:id', updateStartup);
router.delete('/:id', deleteStartup);

module.exports = router;