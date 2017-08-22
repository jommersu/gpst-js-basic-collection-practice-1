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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
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
/*    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);*/
   let collectionC = [];
   collectionA.forEach( ele => {
       if(ele.includes("-")){
           let arr = ele.split("-");
           collectionC.push({key :arr[0] , count : parseInt(arr[1])});
       }else if(!collectionC.find(item => item.key === ele)){
           collectionC.push({key : ele , count : collectionA.filter( element => element === ele).length});
       }
   });
   let result = collectionC.map( ele => {
       if(!objectB.value.find( item => item === ele.key)){
           return ele;
       }else {
           return { key : ele.key , count : (ele.count - Math.floor(ele.count / 3))};
       }
   });
   return result;
}
