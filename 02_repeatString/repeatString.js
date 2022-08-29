const repeatString = function(string, numTimes) {
    let newString = "";
    if (numTimes < 0) {
        return "ERROR";
    }
    else {
        for (i=1; i<=numTimes; i++) {
            newString = newString + string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
