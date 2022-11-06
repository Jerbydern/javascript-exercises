const reverseString = function(str) {
    fin = ''
    for (i = 0 ; i < (str.length + 1) ; i ++) {
        fin += str.charAt(str.length-i)
    }
    return fin

};

// Do not edit below this line
module.exports = reverseString;
