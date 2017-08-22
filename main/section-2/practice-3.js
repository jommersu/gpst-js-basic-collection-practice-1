'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.name === ch) {
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
            obj.summary++;
        } else {
            result.push({name: item, summary: 1});
        }
    }
    return result;
}

function split(item) {
    if (item.includes("-")) {
        let array = item.split("-");
        return {key: array[0], count: parseInt(array[1], 10)};
    }

    if (item.includes("[")) {
        let key = item.charAt(0);
        let count = parseInt(item.substr(2, item.length - 1));
        return {key, count};
    }

    if (item.includes(":")) {
        let array = item.split(":");
        return {key: array[0], count: parseInt(array[1], 10)};
    }
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
}*/

module.exports = function countSameElements(collection) {
   /* let expandedArray = expand(collection);
    return summarize(expandedArray);*/
    let result = [];
    collection.forEach(ele => {
        if(ele.includes("[")){
            let arr = ele.split("[");
            result.push({name : arr[0], summary:parseInt(arr[arr.length - 1])});
        }else if(ele.includes("-")){
            let arr = ele.split("-");
            result.push({name : arr[0], summary:parseInt(arr[1])});
        }else if(ele.includes(":")){
            let arr = ele.split(":");
            result.push({name: arr[0], summary:parseInt(arr[1])});
        }else if(!result.find( element => element.name === ele)){
            result.push({name: ele , summary: collection.filter(item => item === ele).length});
        }
    });
    let result2 = [];
    result.forEach(ele => {
        if (!result2.find(element => element.name === ele.name)) {
            result2.push(ele);
        } else {
            let obj = result2.filter(item => item.name === ele.name);
            let index = result2.indexOf(obj[0]);
            result2[index].summary += ele.summary;
        }
    });
    return result2;
}
