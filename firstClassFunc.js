// Passing function as parameter
function myName(name, callBack){
    var myAge = 23
    callBack(myAge)
    console.log(name);
}

function callBack(age){
    console.log("My Age Is "+ age);
}
myName("Mark", callBack);






// Return a function from function
function newFunc(name){
    console.log(`My name is ${name}`);
    return function menu(menu){
        console.log(`Do you like ${menu} Mr. ${name}`);
    }
}
newFunc("Jon")("Coffee") // Second name for the returned function