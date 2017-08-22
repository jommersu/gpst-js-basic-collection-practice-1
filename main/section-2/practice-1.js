'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}*/

module.exports = function countSameElements(collection) {
/*    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }*/
    let result = [];
    collection.forEach( ele => {
        if(!result.find( item => item.key === ele)){
            result.push({key : ele ,count: collection.filter( element => element === ele).length});
        }
        return result;
    });
    return result;
}
