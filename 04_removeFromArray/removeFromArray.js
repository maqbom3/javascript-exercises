const removeFromArray = function(arr, ...args) {
    newArr = [];
    for(i = 0; i < arr.length; i++) {
        if(!args.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
