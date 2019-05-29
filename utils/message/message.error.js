module.exports = function(req, res){
    res.status = 400;
    return {code: 'ERROR', message: "Bad request"};
}