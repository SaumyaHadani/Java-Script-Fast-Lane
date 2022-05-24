function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

each([1,2,3,4], function(val){
    console.log(val);
});
// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});
// 2
// 4
// 6
// 8