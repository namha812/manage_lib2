const models  = require('../models');
const message = require('../utils/message')
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
             ]
        });
        res.send({code: 'SUCCESS', message: "login success", data: students});
    },
    create: async function(req, res) {
        let student = await models.student.create(req.body);
        res.send({code: 'SUCCESS', message: "login success", data: student});
    },
    update: async function(req, res) {
        let student = await models.student.findOne({where: {
            id: req.params.studentId
        }});
        if(student) {
            await student.update(req.body);
            res.send({code: 'SUCCESS', message: "login success", data: student});
        }else {
            res.send(message.BadRequest(res, "user not exsit"));
        }
    },
    delete: async function(req, res) {
        // let student = await models.student.delete();
        res.send({code: 'SUCCESS', message: "login success", data: student});
    }
}
