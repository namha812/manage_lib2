const models = require('../models');
const message = require('../utils/message');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
module.exports = {
    getAll: async function (req, res) {
        let books = await models.book.findAll({
            attributes: ['id', 'bookName', 'author', 'coverPrice', 'quantity', 'content', 'isActive'],
            include: [
                {
                    model: models.category,
                    required: true,
                    as: 'category',
                    attributes: ['id', 'name'],
                },
                {
                    model: models.publisherHouse,
                    required: true,
                    as: 'publisherHouse',
                    attributes: ['id', 'name'],
                }
            ],
            order: [['id', 'desc']],
            where: {
                [Op.or]: [
                    {
                        bookName: {
                            [Op.like]: `%${lodash.get(req, 'query.bookSearch', "")}%`
                        }
                    },
                    {
                        author: {
                            [Op.like]: `%${lodash.get(req, 'query.bookSearch', "")}%`
                        }
                    }
                ]

            }
        });
        res.send({ code: 'SUCCESS', message: "get book success", data: books });
    },
    create: async function (req, res) {
        let book = await models.book.create(req.body);
        await models.historyInput.create({userId: 1, quantity: req.body.quantity, bookId: book.id});
        res.send({ code: 'SUCCESS', message: "create book success", data: book });
    },
    update: async function (req, res) {
        let book = await models.book.findOne({
            where: {
                id: req.params.bookId
            }
        });
        if (book) {
            let updateQuantity = req.body.quantity - book.quantity;
            if(updateQuantity !== 0) {
                await models.historyInput.create({userId: 1, quantity: updateQuantity, bookId: book.id});
            }
            await book.update(req.body);
            res.send({ code: 'SUCCESS', message: "update book success", data: book });
        } else {
            res.send(message.BadRequest(res, "book not exsit"));
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
