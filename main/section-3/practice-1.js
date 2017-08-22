'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}*/

module.exports = function createUpdatedCollection(collectionA, objectB) {
/*    let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    }*/
    let result = collectionA.map( ele => {
        if(!objectB.value.find(item => item === ele.key)){
            return ele;
        }else {
            return { key: ele.key , count: (ele.count - 1)};
        }
    });
    return result;
}
