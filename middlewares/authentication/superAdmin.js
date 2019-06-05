const message = require('../../utils/message');
module.exports = function(req, res, next){
    if(parseInt(req.decoded.role) === 1){
        next();
    }else {
        res.send(message.Unauthorized(req, res));
    }
}
