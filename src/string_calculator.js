function add(str) {
    let sum = 0,
        numSplit = str.split(/[\n|,|;]/g),
        negatives = [];

    if (str == "") {
        return 0;
    }

    function excapingSpecChar(regCharacters) {
        return regCharacters.replace(/[*&$.=*+?\\(){}\/\[\]]/g, "\\$&")
    }

    if (str.startsWith('//')) {
        let delimeter = str.split(/\/\/(.*)\n/g)[1],
            numSec = str.split(/\/\/(.*)\n/g)[2];
        delimeter = new RegExp(excapingSpecChar(delimeter), "g");
        numSplit = numSec.replace(delimeter, ",").split(",")

    }

    if (str.startsWith('//[')) {
        let delimeter = str.match(/(?<=\/\/).*(?=\n)/g)[0],
            replacer = delimeter.replace("[", ""),
            replacer2 = replacer.replace(/\]\[/g, "|"),
            replacer3 = replacer2.replace("]", ""),
            numSec = str.match(/(?<=\n).*/g)[0];

        delimeter = new RegExp(excapingSpecChar(replacer3), "g");
        numSplit = numSec.replace(delimeter, ",").split(",");
    }

    for (let i = 0; i < numSplit.length; i++) {
        if (numSplit[i] >= 1000) {
            continue;
        }
        sum += parseInt(numSplit[i])
    }

    for (let i = 0; i < numSplit.length; i++) {
        if (numSplit[i] < 0) {
            negatives.push(parseInt(numSplit[i]));
        }
    }
    if (negatives.length > 0) {
        throw ("negatives not allowed " + negatives);
    }
    if (str.match(/\D$/) || isNaN(sum)) {
        throw Error("Invalid input")
    }
    return sum
}

module.exports = {
    add
}