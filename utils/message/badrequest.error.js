module.exports = function(res, message){
    res.statusCode = 400;
    return {code: 'BAD_REQUEST', message: message};
}