var express = require('express');
var router = express.Router();
const studentController = require('../../controller/student.controler');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationStudent = require('../../middlewares/validation/student/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', handerErr(authenMiddleware.Authentication), handerErr(studentController.getAll));
router.post('/',
    handerErr(authenMiddleware.Authentication),
    handerErr(validationStudent.CreateForm),
    handerErr(validationStudent.CardNumberExisdted),
    studentController.create
);
router.put('/:studentId',
    handerErr(authenMiddleware.Authentication),
    handerErr(validationStudent.CreateForm), 
    handerErr(validationStudent.CardNumberExisdted),
    handerErr(studentController.update));
router.delete('/:studentId',
    handerErr(authenMiddleware.Authentication),
    handerErr(studentController.delete));
module.exports = router;