'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/

module.exports = function collectSameElements(collectionA, collectionB) {
 /*   let result = [];
    for (let item of collectionA) {
        if (includes(collectionB, item)) {
            result.push(item);
        }
    }*/
    let result = collectionA.filter( ele => {
        return collectionB.find( item => item === ele);
    });
    return result;
}
