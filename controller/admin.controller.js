const models = require('../models');
const message = require('../utils/message');
const Op = models.Sequelize.Op;
const lodash = require('lodash');
const md5 = require('md5');
exports.create = async function(req, res){
    req.body.password = md5(req.body.password)
    let admin = await models.admin.create(req.body);
    res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
}

// exports.update = function(req, res){
//     req.body.password = md5(req.body.password)
//     let admin = await models.admin.create(req.body);
//     res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
// }

exports.getAll = async function(req, res) {
    let admin = await models.admin.findAll({
        attributes: ['id', 'fullName', 'email', 'address', 'role']
    });
    res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
}

exports.getById = async function(req, res){
    if(req.decoded.role !== 1 && req.decoded.id !== parseInt(req.params.adminId)) {
        return res.send({ code: 'ERR', message: "get info faild", data: admin });
    }else {
        let admin = await models.admin.findOne({where: {id: req.params.adminId}});
        res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
    }
    
}