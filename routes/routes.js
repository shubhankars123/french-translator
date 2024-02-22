const express = require('express');
const router = express.Router();
const translationController = require('../controller/controller.js');

router.post('/translatedtext', translationController.translateText);

module.exports = router;

