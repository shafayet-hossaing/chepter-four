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