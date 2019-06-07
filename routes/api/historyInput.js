var express = require('express');
var router = express.Router();
const historyInputController = require('../../controller/historyInput.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(historyInputController.getAll));

module.exports = router;