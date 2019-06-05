const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            email: req.body.email
        }
    }
    if(req.params.adminId) {
        condition.where.id = {
            [Op.ne]: req.params.adminId
        }
    }
    let admin = await models.admin.findOne(condition);
    if(admin) {
        return res.send(message.BadRequest(res, "Admin email existed"));
    }
    next();
}
