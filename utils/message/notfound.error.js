module.exports = function(req, res){
    res.status = 404;
    return {code: 'NOT_FOUND', message: "This API not found! "};
}