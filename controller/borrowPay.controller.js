const models = require('../models');
const message = require('../utils/message');
const moment = require('moment');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
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
        res.send({ code: 'SUCCESS', message: "payment success", data: borrow });
    },
    create: async function (req, res) {
        let bookIds = []
        req.body.borrowPay.forEach(item => {
            bookIds.push(item.bookId);
        })
        let books = await models.book.findAll({
            where:{
                id: { [Op.in]: bookIds }
            }
        });
        let arrPromise = []
        books.forEach(book => {
            let borrowBook = lodash.find(req.body.borrowPay, function(o) {
                return book.id === o.bookId;
            });
            console.log(borrowBook);
            let quantity = book.quantity - borrowBook.quantity;
            console.log(quantity)
            arrPromise.push(models.book.update({ quantity: quantity }, { where: { id: borrowBook.bookId }}));
            arrPromise.push(models.borrowPay.create({ 
                studentId: req.body.studentId, 
                expiryDate: req.body.expiryDate,
                borrowTotal: borrowBook.quantity,
                bookId: borrowBook.bookId,
                createdBy: 1
            }))
        })
        await Promise.all(arrPromise);
        res.send({ code: 'SUCCESS', message: "borrow book success", data: books });
    }
}
