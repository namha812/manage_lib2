var models  = require('../models');
const jwt  = require('jsonwebtoken');
const secretKey = require('../config/util').secret;
const message = require('../utils/message/index')
module.exports = {
    login: async function(req, res) {
        let admin = await models.admin.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            },
            attributes: ['id','fullName', 'email']
        });
        if(admin) {
            var token = jwt.sign(admin.dataValues, secretKey, {expiresIn: '10h'});
            res.send({token: 'JWT ' + token, code: 'SUCCESS', message: "login success", user: admin});
        }else {
            res.send(message.BadRequest(res, 'incorrect password or email'));
        }
    }
}
