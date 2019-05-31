const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            name: req.body.name
        }
    }
    if(req.params.publishingHouseId) {
        condition.where.id = {
            [Op.ne]: req.params.publishingHouseId
        }
    }
    let publishingHouse = await models.publishingHouse.findOne(condition);
    if(publishingHouse) {
        return res.send(message.BadRequest(res, "publishingHouse name existed"));
    }
    next();
}
