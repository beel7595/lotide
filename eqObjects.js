const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const assertEqual = function (actual, expected) {

    const result = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
    console.log(result);
}

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



assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);