module.exports = function(req, res){
    res.status = 500;
    return {code: 'UNEXPECTED', message: "Server unexpected service"};
}