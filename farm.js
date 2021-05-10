// PROMISES
console.log("plant kunde");
setTimeout(function(){

    console.log("water kunde")
},3000);
console.log("add ferterlizer");
// CALL BACK FUNCTION
function greeting(name) {
    console.log(`Hello ${name}, 
    welcome to JS class`);
    }
    

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

introduction('John', 'Doe', greeting);
const promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
   
     if (/* everything turned out fine */) 
     {
       resolve("Stuff worked!");
     }
     else {
       reject(Error("It broke"));
     }
   });
   
   
   


