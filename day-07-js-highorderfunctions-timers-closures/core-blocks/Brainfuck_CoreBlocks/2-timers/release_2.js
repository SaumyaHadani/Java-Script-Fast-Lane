var timerId = setInterval(function(){
    console.log("HI!");
},1000);

setTimeout(function(){
   clearInterval(timerId);
},3000);
// HI!
// HI!
//
// The id is taken by timerid  and sent to clear interval which is triggered 
// after 3 sec