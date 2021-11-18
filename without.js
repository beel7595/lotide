
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
const words = ["hello", "world", "lighthouse"];
const without = (source, itemsToRemove) => {
    const result = [];
    for (let i = 0; i < source.length; i++) {
        let isRepeat = false;
        for (let j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
                isRepeat = true;
                break;
            }
        }
        if (!isRepeat) {
            result.push(source[i]);
        }
    }
    return result;
}

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);