var express = require('express');
var router = express.Router();
const studentController = require('../../controller/student.controler');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationStudent = require('../../middlewares/validation/student/index')
/* GET users listing. */
router.get('/',authenMiddleware.Authentication, studentController.getAll);
router.post('/',
    authenMiddleware.Authentication,
    validationStudent.CreateForm,
    validationStudent.CardNumberExisdted,
    studentController.create
);
router.put('/:studentId',
    authenMiddleware.Authentication,
    validationStudent.CreateForm, 
    validationStudent.CardNumberExisdted,
    studentController.update);
module.exports = router;