var express = require('express');
var router = express.Router();
const classController = require('../../controller/class.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationClass = require('../../middlewares/validation/class/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(classController.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationClass.ClassNameExisdted), 
    handerErr(classController.create));
router.put('/:classId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationClass.ClassNameExisdted), 
    handerErr(classController.update));
module.exports = router;