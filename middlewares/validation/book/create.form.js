const message = require('../../../utils/message/index')

module.exports = (req, res, next) => {
    if (!req.body.bookName) {
        return res.send(message.BadRequest(res, "Book name is blank"));
    }
    if (!req.body.categoryId) {
        return res.send(message.BadRequest(res, "Category is blank"));
    }
    if(!req.body.coverPrice) {
        return res.send(message.BadRequest(res, "Cover price is blank"));
    }
    if(!req.body.quantity) {
        return res.send(message.BadRequest(res, "Quantity is blank"));
    }
    if(!req.body.publisherHouseId) {
        return res.send(message.BadRequest(res, "publisher house is blank"));
    }
    next();
}
