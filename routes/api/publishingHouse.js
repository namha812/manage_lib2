var express = require('express');
var router = express.Router();
const publishingHouse = require('../../controller/publishingHouse.controller');
const authenMiddleware = require('../../middlewares/authentication/index');
const validationPublishingHouse = require('../../middlewares/validation/publishingHouse/index');
const handerErr = require('../../utils/handerErr');
/* GET users listing. */
router.get('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(publishingHouse.getAll));
router.post('/', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationPublishingHouse.PublishingHouseNameExisdted), 
    handerErr(publishingHouse.create));
router.put('/:publishingHouseId', 
    handerErr(authenMiddleware.Authentication), 
    handerErr(validationPublishingHouse.PublishingHouseNameExisdted), 
    handerErr(publishingHouse.update));
module.exports = router;