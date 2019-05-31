var express = require('express');
var router = express.Router();
const loginController = require('../../controller/login.controller');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.post('/', handerErr(loginController.login));
module.exports = router;