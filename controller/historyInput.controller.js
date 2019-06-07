const models = require('../models');
const message = require('../utils/message');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
module.exports = {
    getAll: async function (req, res) {
        let history = await models.historyInput.findAll({
            attributes: ['id', 'quantity', 'createdAt'],
            order: [['id', 'desc']],
            include: [
                {
                    model: models.book,
                    as: "book",
                    attributes: ['bookName', 'author']
                },
                {
                    model: models.admin,
                    as: "account",
                    attributes: ['email', 'role', 'fullName']
                }
            ]
        });
        res.send({ code: 'SUCCESS', message: "get history success", data: history });
    }
}
