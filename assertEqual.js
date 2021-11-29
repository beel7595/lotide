const assertEqual = function (actual, expected) {

    const result = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
    console.log(result);
}



module.exports = assertEqual;