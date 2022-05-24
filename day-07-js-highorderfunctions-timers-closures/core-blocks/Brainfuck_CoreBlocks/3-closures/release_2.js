function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

//  undefined
//  2

// a is logged out, before it is declared or assigned a value. So, it logs out `undefined`.
// Functions are hoisted. So their order of declaration doesn't really matter.
