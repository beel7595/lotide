const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

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

const eqObjects = function (object1, object2) {

    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    for (const key of Object.keys(object1)) {

        if (Array.isArray(object1[key])) {

            if (!eqArrays(object1[key], object2[key])) {
                return false;
            }
        } else {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }
    }
    return true;
}


const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    // console.log(`Example label: ${inspect(actual)}`);
    const result = eqObjects(actual, expected) ? `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    console.log(result);
};


assertObjectsEqual(ab, ba);