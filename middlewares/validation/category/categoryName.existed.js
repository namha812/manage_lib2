const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            name: req.body.name
        }
    }
    if(req.params.categoryId) {
        condition.where.id = {
            [Op.ne]: req.params.categoryId
        }
    }
    let category = await models.category.findOne(condition);
    if(category) {
        return res.send(message.BadRequest(res, "Category name existed"));
    }
    next();
}
