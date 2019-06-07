var secret = require('../../config/util').secret;
let jwt = require('jsonwebtoken');
const message = require('../../utils/message/index');
const models = require('../../models');
function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}
let checkToken = (req, res, next) => {
    let token = getTokenFromHeader(req);
    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.send(message.Unauthorized(req, res));
            } else {
                // let account = await models.admin.findOne({where: { 
                //     id: decoded.id,
                //     isActive:
                // }});
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send(message.Unauthorized(req, res));
    }
}

module.exports = checkToken;