'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

function summarize(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;
}

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

function discount(collection, promotionItems) {
    let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}*/

module.exports = function createUpdatedCollection(collectionA, objectB) {
/*    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);*/
    let collectionC = [];
    collectionA.forEach( ele => {
        if(!collectionC.find( item => item.key === ele)){
            collectionC.push({key : ele ,count : collectionA.filter(element => element === ele).length});
        }
    });
    let result = collectionC.map( ele => {
        if(!objectB.value.find( item => item === ele.key)){
            return ele;
        }else {
            return {key : ele.key , count : (ele.count - Math.floor(ele.count / 3))};
        }
    });
    return result;
}
