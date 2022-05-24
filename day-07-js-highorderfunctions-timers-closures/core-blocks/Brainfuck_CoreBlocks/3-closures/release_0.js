function outerFunc(str) {
    return function innerFunc() {
        console.log(str);
    }
    // innerFunc();
}
// Method 1:
var name = outerFunc("Vignesh!");
name();
// Vignesh!

// Method 2:
outerFunc("Vignesh!")();
// Vignesh!