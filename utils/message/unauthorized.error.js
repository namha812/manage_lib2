module.exports = function(req, res){
    res.statusCode = 401;
    return {code: 'UNAUTHORIZED', message: "Unauthorized"};
}