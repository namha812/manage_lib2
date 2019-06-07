var express = require('express');
var router = express.Router();
const adminController = require('../../controller/account.controller');
const authenMiddleware = require('../../middlewares/authentication');
const validationAdmin = require('../../middlewares/validation/account');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(authenMiddleware.SuperAdmin),
    handerErr(adminController.getAll));
router.get('/:accountId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(adminController.getById));
router.post('/', 
    handerErr(authenMiddleware.Authentication),
    handerErr(authenMiddleware.SuperAdmin),
    handerErr(validationAdmin.CreateForm),
    handerErr(validationAdmin.EmailAdminExisdted),  
    handerErr(adminController.create));
router.put('/:accountId', 
    handerErr(authenMiddleware.Authentication), 
    // handerErr(validationBook.CardNumberExisdted), 
    handerErr(adminController.update));
module.exports = router;