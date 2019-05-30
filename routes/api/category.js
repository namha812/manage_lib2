var express = require('express');
var router = express.Router();
const categoryController = require('../../controller/category.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationCategory = require('../../middlewares/validation/category/index')
/* GET users listing. */
router.get('/',authenMiddleware.Authentication, categoryController.getAll);
router.post('/',authenMiddleware.Authentication,validationCategory.CategoryNameExisdted, categoryController.create);
router.put('/:categoryId',authenMiddleware.Authentication,validationCategory.CategoryNameExisdted, categoryController.update);
module.exports = router;