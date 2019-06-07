module.exports = function(req, res){
    res.statusCode = 404;
    return {code: 'NOT_FOUND', message: "This API not found! "};
}