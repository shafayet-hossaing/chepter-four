// Some() Definition
// When we need to check that if the element exist or not, can be in array and object as well and it'll return false or true



// Array checking
const array = ["Mark", 1, 21, 55, "Jon"]
array.some(function (element){
    console.log(element);
    return element === 1
})



// Object checking
const myObj = [
    {
        age: 23,
        job: "Teacher"
    },
    {
        age: 25,
        job: "Employee"
    },
    {
        age: 20,
        job: "Banker"
    }
]
myObj.some(ageProp => console.log(`${ageProp.age === 23} : ${ageProp.age}`))
myObj.some(ageProp => console.log(ageProp.job === "Teacher"))