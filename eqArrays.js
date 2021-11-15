
const eqArrays = (actualArr, expectedArr) => {
    for (let i = 0; i < actualArr.length; i++) {
        if (actualArr[i] !== expectedArr[i]) {
            return false;
        }
    }
    return true;
}

const assertEqual = function (actual, expected) {

    const result = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
    console.log(result);
}

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);