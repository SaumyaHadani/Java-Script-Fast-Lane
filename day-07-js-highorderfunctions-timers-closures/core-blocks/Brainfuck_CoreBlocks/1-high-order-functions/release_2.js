function map(arr, callback) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

var newArr = map([1,2,3,4], function(val){
    return val * 2;
}); 

console.log(newArr);
// [ 2, 4, 6, 8 ]
