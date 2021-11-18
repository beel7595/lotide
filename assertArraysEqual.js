
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);