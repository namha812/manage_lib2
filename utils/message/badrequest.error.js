module.exports = function(req, res){
    res.status = 400;
    return {code: 'BAD_REQUEST', message: "Bad request"};
}