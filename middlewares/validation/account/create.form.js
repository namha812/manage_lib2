const message = require('../../../utils/message/index')
const validator = require('validator');
module.exports = (req, res, next) => {
    if (!req.body.fullName) {
        return res.send(message.BadRequest(res, "fullName name is blank"));
    }
    if (!req.body.email || !validator.isEmail(req.body.email)) {
        return res.send(message.BadRequest(res, "email incorrect"));
    }
    if (!req.body.role) {
        return res.send(message.BadRequest(res, "role name is blank"));
    }
    if (!req.body.password) {
        return res.send(message.BadRequest(res, "password name is blank"));
    }
    next();
}
