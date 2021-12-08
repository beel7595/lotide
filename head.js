const assertEqual = require('./assertEqual');

const head = (arr) => {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}


module.exports = head;