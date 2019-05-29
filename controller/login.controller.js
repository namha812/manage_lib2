var models  = require('../models');
const jwt  = require('jsonwebtoken');
const secretKey = require('../config/util').secret;
const message = require('../utils/message/index')
module.exports = {
    login: async function(req, res) {
        let user = await models.user.findOne({
            where: {
                email: req.body.userName,
                password: req.body.password
            },
            attributes: ['id','fullName', 'email']
        });
        if(user) {
            var token = jwt.sign(user.dataValues, secretKey, {expiresIn: '10h'});
            res.send({token: 'JWT ' + token, code: 'SUCCESS', message: "login success", user: user});
        }else {
            res.send(message.BadRequest(req, res));
        }
    }
}
