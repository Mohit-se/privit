var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeController');

router.get('/',homeController.index);

router.post('/registration', homeController.registrations);

router.post("/login",homeController.login);

router.get("/personal-info", homeController.personalInfo);

router.get('/about-us',homeController.aboutUs);

module.exports = router;
