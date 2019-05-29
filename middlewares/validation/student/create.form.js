const message = require('../../../utils/message/index')

module.exports = (req, res, next) => {
    if (!req.body.email) {
        res.send(message.BadRequest(res, "Email is blank"));
    } else {
        next();
    }
}
