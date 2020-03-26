var express = require('express');
var router = express.Router();
var controller = require('./pagecontroller')

//middleware i router bazında da kullanabilriiz
router.use(function (req, res, next) {
    req.deneme = 'Merhaba';
    //next yapmassak sayfada bekleme olur açılmaz, amacımız responsu göndermek
    next();
});

router.get('/', controller.index);
router.get('/login', controller.login);

module.exports = router;