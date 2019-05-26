var models  = require('../models');
const jwt  = require('jsonwebtoken');
const secretKey = require('../config/util').secret;
const message = require('../utils/message/index')
module.exports = {
    login: async function(req, res) {
        let user = await models.user.findOne({
            where: {
                email: 'namha812@gmail.com',
                password: '1234'
            },
            attributes: ['id','fullName', 'email']
        });
        if(user) {
            var token = jwt.sign(user.dataValues, secretKey, {expiresIn: '10h'});
            res.send({token: token, code: 'SUCCESS', message: "login success", user: user});
        }else {
            res.send(message.BadRequest(req, res));
        }
    }
}
