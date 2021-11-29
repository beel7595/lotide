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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 4, 3, 2, 4];

const map = function (array, callback) {

    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number * 2);



assertArraysEqual(results1, ["g", 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2, 8, 6, 4, 8]);
