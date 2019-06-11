const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            className: req.body.className
        }
    }
    if(req.params.classId) {
        condition.where.id = {
            [Op.ne]: req.params.classId
        }
    }
    let classes = await models.classes.findOne(condition);
    if(classes) {
        return res.send(message.BadRequest(res, "Class name existed"));
    }
    next();
}
