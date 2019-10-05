exports.stringManip = function (str) {
    if (typeof str === 'string'){
        return str.trim().toLowerCase()
    }else{
        throw 'Not a string'
    }
};