var express = require('express');
var router = express.Router();
const bookController = require('../../controller/book.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationBook = require('../../middlewares/validation/book/index')
/* GET users listing. */
router.get('/',authenMiddleware.Authentication, bookController.getAll);
router.post('/',authenMiddleware.Authentication,validationBook.CardNumberExisdted, bookController.create);
router.put('/:bookId',authenMiddleware.Authentication,validationBook.CardNumberExisdted, bookController.update);
module.exports = router;