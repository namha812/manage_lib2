const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            cardNumber: req.body.cardNumber
        }
    }
    if(req.params.studentId) {
        condition.where.id = {
            [Op.ne]: req.params.studentId
        }
    }
    let student = await models.student.findOne(condition);
    if(student) {
        return res.send(message.BadRequest(res, "Card number existed"));
    }
    next();
}
