const models  = require('../models');
const message = require('../utils/message');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
module.exports = {
    getAll: async function(req, res) {
        let students = await models.student.findAll({
            attributes: ['id','fullName', 'email', 'sex', 'address', 'cardNumber', 'phone', 'isActive'],
            include: [
                { 
                    model: models.classes, 
                    required: true, 
                    as: 'class',
                    attributes: ['id','className'],
                }
             ],
            where: {
                [Op.or]: [
                    {
                        fullName: {
                            [Op.like]: `%${lodash.get(req, 'query.nameCard', "")}%`
                        }
                    },
                    {
                        cardNumber: {
                            [Op.like]: `%${lodash.get(req, 'query.nameCard', "")}%`
                        }
                    }
                ]
                
            }
        });
        res.send({code: 'SUCCESS', message: "get student success", data: students});
    },
    create: async function(req, res) {
        let student = await models.student.create(req.body);
        res.send({code: 'SUCCESS', message: "create student success", data: student});
    },
    update: async function(req, res) {
        let student = await models.student.findOne({where: {
            id: req.params.studentId
        }});
        if(student) {
            await student.update(req.body);
            res.send({code: 'SUCCESS', message: "update student success", data: student});
        }else {
            res.send(message.BadRequest(res, "student not exsit"));
        }
    },
    delete: async function(req, res) {
        let student = await models.student.destroy({
            where: {
                id: releaseEventseq.params.studentId
            }
        });
        res.send({code: 'SUCCESS', message: "delete student success", data: student});
    }
}
