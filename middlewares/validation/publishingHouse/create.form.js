const message = require('../../../utils/message/index')

module.exports = (req, res, next) => {
    if (!req.body.name) {
        return res.send(message.BadRequest(res, "Publishing House name is blank"));
    }
    next();
}
