var express = require('express');
var router = express.Router();
var controller = require('./pagecontroller')

router.get('/', controller.index);
router.get('/login', controller.login);

module.exports = router;