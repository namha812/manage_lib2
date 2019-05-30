const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            bookName: req.body.bookName
        }
    }
    if(req.params.bookId) {
        condition.where.id = {
            [Op.ne]: req.params.bookId
        }
    }
    let book = await models.book.findOne(condition);
    if(book) {
        return res.send(message.BadRequest(res, "Book name existed"));
    }
    next();
}
