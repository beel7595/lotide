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

const takeUntil = function (array, callback) {

    const results = [];

    array.some(element => {
        if (callback(element)) {
            return true;
        } else {
            results.push(element);
        }
    });

    return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);