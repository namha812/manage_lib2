const models = require('../models');
const message = require('../utils/message');
module.exports = {
    getAll: async function (req, res) {
        let publishingHouse = await models.publishingHouse.findAll({
            attributes: ['id', 'name', 'isActive']
        });
        res.send({ code: 'SUCCESS', message: "get book success", data: publishingHouse });
    },
    create: async function (req, res) {
        let publishingHouse = await models.publishingHouse.create(req.body);
        res.send({ code: 'SUCCESS', message: "create publishingHouse success", data: publishingHouse });
    },
    update: async function (req, res) {
        let publishingHouse = await models.publishingHouse.findOne({
            where: {
                id: req.params.publishingHouseId
            },
            attributes:["id", "name", "isActive"]
        });
        if (publishingHouse) {
            await publishingHouse.update(req.body);
            res.send({ code: 'SUCCESS', message: "update publishingHouse success", data: publishingHouse });
        } else {
            res.send(message.BadRequest(res, "publishingHouse not exsit"));
        }
    }
}
