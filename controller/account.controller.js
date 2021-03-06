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

exports.update = async function(req, res){
    if(parseInt(req.decoded.role) !== 1 && req.decoded.id !== parseInt(req.params.accountId)) {
        res.send(message.BadRequest(res, "Bạn không có quyền sửa"))
    }else {
        let admin = await models.admin.findOne({where: { id: req.params.accountId }});
        req.body.password = req.body.password ? md5(req.body.password) : admin.password;
        await admin.update(req.body);
        res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
    }
}

exports.getAll = async function(req, res) {
    let admin = await models.admin.findAll({
        attributes: ['id', 'fullName', 'email', 'address', 'role', 'isActive']
    });
    res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
}

exports.getById = async function(req, res){
    if(parseInt(req.decoded.role) !== 1 && req.decoded.id !== parseInt(req.params.accountId)) {
        return res.send({ code: 'ERR', message: "get info faild" });
    }else {
        let admin = await models.admin.findOne({where: {id: req.params.accountId}});
        res.send({ code: 'SUCCESS', message: "create admin success", data: admin });
    }
    
}