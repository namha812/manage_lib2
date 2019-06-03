exports.getUser = function(req,res,next){
    req.user = {
        id: 123,
        name: "abc1"
    }
    next();
}

exports.getUser2 = function(req,res,next){
    res.send(req.decoded);
}