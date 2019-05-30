const models = require('../models');
const message = require('../utils/message');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
module.exports = {
    getAll: async function (req, res) {
        let category = await models.category.findAll({
            attributes: ['id', 'name', 'isActive']
        });
        res.send({ code: 'SUCCESS', message: "get book success", data: category });
    },
    create: async function (req, res) {
        let category = await models.category.create(req.body);
        res.send({ code: 'SUCCESS', message: "create category success", data: category });
    },
    update: async function (req, res) {
        let category = await models.category.findOne({
            where: {
                id: req.params.categoryId
            }
        });
        if (category) {
            await category.update(req.body);
            res.send({ code: 'SUCCESS', message: "update category success", data: category });
        } else {
            res.send(message.BadRequest(res, "category not exsit"));
        }
    },
    delete: async function (req, res) {
        let book = await models.book.destroy({
            where: {
                id: req.params.bookId
            }
        });
        res.send({ code: 'SUCCESS', message: "delete book success", data: book });
    }
}
