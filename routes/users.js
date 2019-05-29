var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const authenMiddleware = require('../middlewares/authentication/index');
/* GET users listing. */
router.get('/',
    authenMiddleware.Authentication , 
    userController.getUser, 
    userController.getUser2
    );
router.get('/user1', userController.getUser, userController.getUser2);
module.exports = router;
