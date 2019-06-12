const models = require('../models');
const message = require('../utils/message');
module.exports = {
    getAll: async function (req, res) {
        let category = await models.category.findAll({
            attributes: ['id', 'name', 'isActive', 'createdAt', 'description'],
            include: [
                {
                    model: models.admin,
                    required: true,
                    as: 'admin',
                    attributes: ['id','fullName'],
                },
            ]
        });
        res.send({ code: 'SUCCESS', message: "get category success", data: category });
    },
    create: async function (req, res) {
        req.body.createdBy = req.decoded.id;
        let category = await models.category.create(req.body);
        res.send({ code: 'SUCCESS', message: "create category success", data: category });
    },
    update: async function (req, res) {
        let category = await models.category.findOne({
            where: {
                id: req.params.categoryId
            },
            attributes:["id", "name", "isActive", 'description']
        });
        if (category) {
            await category.update(req.body);
            res.send({ code: 'SUCCESS', message: "update category success", data: category });
        } else {
            res.send(message.BadRequest(res, "category not exsit"));
        }
    }
}
