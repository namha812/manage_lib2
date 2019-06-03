var express = require('express');
var router = express.Router();
const brrowPayController = require('../../controller/borrowPay.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
// const validationBook = require('../../middlewares/validation/book/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(brrowPayController.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication),
    // handerErr(validationBook.CardNumberExisdted), 
    handerErr(brrowPayController.create));
router.put('/payment/:borrowId', 
    handerErr(authenMiddleware.Authentication), 
    // handerErr(validationBook.CardNumberExisdted), 
    handerErr(brrowPayController.payment));
module.exports = router;