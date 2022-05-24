// Closure

var fillings = ['Mayo', 'Chilli sauce'];

global.makeSandwich = (function (fillings) {
    var addBread = function () {
        console.log("Adding the bread.");
    };
    var spreadSoya = function () {
        console.log("The goodness of soya margarine on your bread.");
    };
    var addJam = function () {
        console.log("Adding jam.");
    };
    var extraFillings = function (fillings) {
        fillings.forEach(element => {
            console.log("Adding ", element);
        });
    }

    function makeSandwich() {
        addBread();
        spreadSoya();
        addJam();
        extraFillings(fillings);
    }

    return makeSandwich;
})(fillings);

makeSandwich();

// Adding the bread.
// The goodness of soya margarine on your bread.
// Adding jam.
// Adding  Mayo
// Adding  Chilli sauce