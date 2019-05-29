module.exports = function(res, message){
    res.status = 400;
    return {code: 'BAD_REQUEST', message: message};
}