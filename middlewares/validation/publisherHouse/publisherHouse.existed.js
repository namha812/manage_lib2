const message = require('../../../utils/message/index')
const models = require('../../../models');
const Op = models.Sequelize.Op;
module.exports = async (req, res, next) => {
    let condition = {
        where: {
            name: req.body.name
        }
    }
    if(req.params.publisherHouseId) {
        condition.where.id = {
            [Op.ne]: req.params.publisherHouseId
        }
    }
    let publisherHouse = await models.publisherHouse.findOne(condition);
    if(publisherHouse) {
        return res.send(message.BadRequest(res, "publisherHouse name existed"));
    }
    next();
}
