const middle = (arr) => {
    const len = arr.length;
    if (len == 1 || len == 2) {
        return [];
    }
    if (len % 2 == 0) {
        return [arr[len / 2 - 1], arr[len / 2]];
    } {
        return [arr[Math.ceil(len / 2) - 1]];
    }
}


module.exports = middle;