const models = require('../models');
const message = require('../utils/message');
module.exports = {
    getAll: async function (req, res) {
        let classes = await models.classes.findAll({
            attributes: ['id', 'className', 'isActive', 'createdAt']
        });
        res.send({ code: 'SUCCESS', message: "get classes success", data: classes });
    },
    create: async function (req, res) {
        let classes = await models.classes.create(req.body);
        res.send({ code: 'SUCCESS', message: "create classes success", data: classes });
    },
    update: async function (req, res) {
        let classes = await models.classes.findOne({
            where: {
                id: req.params.classId
            },
            attributes:["id", "className", "isActive"]
        });
        if (classes) {
            await classes.update(req.body);
            res.send({ code: 'SUCCESS', message: "update classes success", data: classes });
        } else {
            res.send(message.BadRequest(res, "classes not exsit"));
        }
    }
}
