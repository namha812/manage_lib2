var express = require('express');
var router = express.Router();
const bookController = require('../../controller/book.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationBook = require('../../middlewares/validation/book/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    // handerErr(authenMiddleware.Authentication), 
    // handerErr(authenMiddleware.SuperAdmin),
    handerErr(bookController.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication),
    handerErr(validationBook.CreateForm),
    handerErr(validationBook.BookNameExisdted), 
    handerErr(bookController.create));
router.put('/:bookId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationBook.BookNameExisdted), 
    handerErr(bookController.update));
module.exports = router;