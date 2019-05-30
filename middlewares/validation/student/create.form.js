const message = require('../../../utils/message/index')

module.exports = (req, res, next) => {
    if (!req.body.fullName) {
        return res.send(message.BadRequest(res, "Full name is blank"));
    }
    if (!req.body.email) {
        return res.send(message.BadRequest(res, "Email is blank"));
    }
    if(!req.body.cardNumber) {
        return res.send(message.BadRequest(res, "Card number is blank"));
    }
    if(!req.body.sex) {
        return res.send(message.BadRequest(res, "Sex is blank"));
    }
    if(!req.body.classId) {
        return res.send(message.BadRequest(res, "Class is blank"));
    }
    next();
}
