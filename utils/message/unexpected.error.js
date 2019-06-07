module.exports = function(req, res){
    res.statusCode = 500;
    return {code: 'UNEXPECTED', message: "Server unexpected service"};
}