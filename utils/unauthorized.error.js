module.exports = function(req, res){
    res.status = 401;
    return {code: 'UNAUTHORIZED', message: "Unauthorized"};
}