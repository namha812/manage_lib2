const models = require('../models');
const message = require('../utils/message');
module.exports = {
    getAll: async function (req, res) {
        let publisherHouse = await models.publisherHouse.findAll({
            attributes: ['id', 'name', 'isActive']
        });
        res.send({ code: 'SUCCESS', message: "get book success", data: publisherHouse });
    },
    create: async function (req, res) {
        let publisherHouse = await models.publisherHouse.create(req.body);
        res.send({ code: 'SUCCESS', message: "create publisherHouse success", data: publisherHouse });
    },
    update: async function (req, res) {
        let publisherHouse = await models.publisherHouse.findOne({
            where: {
                id: req.params.publisherHouseId
            },
            attributes:["id", "name", "isActive"]
        });
        if (publisherHouse) {
            await publisherHouse.update(req.body);
            res.send({ code: 'SUCCESS', message: "update publisherHouse success", data: publisherHouse });
        } else {
            res.send(message.BadRequest(res, "publisherHouse not exsit"));
        }
    }
}
