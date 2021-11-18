
const eqArrays = (actualArr, expectedArr) => {
    if (actualArr.length != expectedArr.length) {
        return false;
    }
    for (let i = 0; i < actualArr.length; i++) {
        if (actualArr[i] !== expectedArr[i]) {
            return false;
        }
    }
    return true;
}

const assertArraysEqual = function (actual, expected) {

    const result = eqArrays(actual, expected) ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
    console.log(result);
}

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
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);