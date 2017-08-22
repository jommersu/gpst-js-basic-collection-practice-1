'use strict';

function includes(collection, ch) {
/*    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }*/

    return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
/*    let result = [];
    for (let item of collectionA) {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    }*/
    let result = collectionA.filter(ele => {
        return collectionB[0].find( item => item === ele);
    });
    return result;
}