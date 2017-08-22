'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/

module.exports = function collectSameElements(collectionA, objectB) {
/*    let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item.key)) {
            result.push(item.key);
        }
    }*/
    let obj = collectionA.filter(ele => {
        return objectB.value.find( item => item === ele.key);
    });
    let result = obj.map( ele => ele.key);
    return result;
}
