const models = require('../models');
const message = require('../utils/message');
const moment = require('moment')
module.exports = {
    getAll: async function (req, res) {
        let borrowPay = await models.student.findAll({
            attributes: ['id', 'fullName', "cardNumber"],
            include: [
                {
                    model: models.borrowPay,
                    required: true,
                    as: 'borrowPay',
                    attributes: ['id', 'status', 'note', 'borrowDate', 'borrowTotal', 'expiryDate'],
                    where: {
                        status: 1
                    }
                },
            ]
        });
        if(borrowPay){
            borrowPay.forEach(element => {
                let total = 0;
                element.borrowPay.forEach(item => {
                    total += item.borrowTotal;
                    if(moment(new Date()).isAfter(item.expiryDate)){
                        item.dataValues.isExpiry = true
                    }else {
                        item.dataValues.isExpiry = false
                    }
                })
                element.dataValues.total = total
            });
        }
        res.send({ code: 'SUCCESS', message: "get list borrow success", data: borrowPay });
    },
    payment: async function (req, res) {
        
        let borrow = await models.borrowPay.findOne({
            where: {
                id: req.params.borrowId
            }
        });
        let book = await models.book.findOne({
            where: {
                id: borrow.bookId
            }
        })
        if(borrow) {
            let quantity = borrow.borrowTotal - req.body.payTotal + book.quantity;
            let statusPayment = borrow.borrowTotal - req.body.payTotal === 0 ? 2 : 1;
            await models.borrowPay.update({ 
                borrowTotal: borrow.borrowTotal - req.body.payTotal,
                note: req.body.note,
                status: statusPayment
            },{
                where: {id: req.params.borrowId}
            })
            await book.update({ quantity: quantity });
        }
        res.send({ code: 'SUCCESS', message: "create category success", data: borrow });
    },
    update: async function (req, res) {
        let category = await models.category.findOne({
            where: {
                id: req.params.categoryId
            },
            attributes: ["id", "name", "isActive"]
        });
        if (category) {
            await category.update(req.body);
            res.send({ code: 'SUCCESS', message: "update category success", data: category });
        } else {
            res.send(message.BadRequest(res, "category not exsit"));
        }
    }
}
