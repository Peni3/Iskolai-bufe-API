const express = require('express');
const router = express.Router();
const termekController = require('../controllers/termekController');

router.get('/', termekController.getAllTermek);
router.get('/darab', termekController.getDarab);
router.get('/ossz-keszlet', termekController.getOsszKeszlet);
router.get('/kategoriak', termekController.getKategoriak);
router.get('/:id', termekController.getTermekById);

module.exports = router;