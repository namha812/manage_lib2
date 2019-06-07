var models  = require('../models');
const jwt  = require('jsonwebtoken');
const secretKey = require('../config/util').secret;
const message = require('../utils/message/index');
const md5 = require('md5');
module.exports = {
    login: async function(req, res) {
        if(!req.body.email || !req.body.password) {
            res.send(message.BadRequest(res, 'incorrect password or email'));
        }
        let admin = await models.admin.findOne({
            where: {
                email: req.body.email,
                password: md5(req.body.password),
                isActive: 1
            },
            attributes: ['id','fullName', 'email', 'role']
        });
        if(admin) {
            var token = jwt.sign(admin.dataValues, secretKey, {expiresIn: '10h'});
            res.send({token: 'JWT ' + token, code: 'SUCCESS', message: "login success", user: admin});
        }else {
            res.send(message.BadRequest(res, 'incorrect password or email'));
        }
    }
}
