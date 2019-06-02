var express = require('express');
var router = express.Router();
const publisherHouse = require('../../controller/publisherHouse.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationpublisherHouse = require('../../middlewares/validation/publisherHouse/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(publisherHouse.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationpublisherHouse.publisherHouseNameExisdted), 
    handerErr(publisherHouse.create));
router.put('/:publisherHouseId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationpublisherHouse.publisherHouseNameExisdted), 
    handerErr(publisherHouse.update));
module.exports = router;