var express = require('express');
var router = express.Router();
const borrowPayController = require('../../controller/borrowPay.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(borrowPayController.getAll));
router.post('/borrow', 
    handerErr(authenMiddleware.Authentication),
    handerErr(borrowPayController.create));
router.put('/payment/:borrowId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(borrowPayController.payment));
module.exports = router;