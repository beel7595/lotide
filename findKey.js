const assertEqual = function (actual, expected) {

    const result = actual === expected ? `Assertion Passed: ${actual} === ${expected}` : `Assertion Failed: ${actual} !== ${expected}`;
    console.log(result);
}

const object1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
};


const findKey = (object, callback) => {
    const keys = Object.keys(object);
    let result;
    keys.some((element) => {
        console.log(object[element]);
        if (callback(object[element])) {
            result = element;
            return true;
        }

    })
    return result;
}

assertEqual(findKey(object1, x => x.stars === 2), "noma");
assertEqual(findKey(object1, x => x.stars === 5), undefined);