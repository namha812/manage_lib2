var express = require('express');
var router = express.Router();
const categoryController = require('../../controller/category.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationCategory = require('../../middlewares/validation/category/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(categoryController.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationCategory.CategoryNameExisdted), 
    handerErr(categoryController.create));
router.put('/:categoryId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationCategory.CategoryNameExisdted), 
    handerErr(categoryController.update));
module.exports = router;