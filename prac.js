// // Class practice
class Person{
    constructor(name, id, job){
        this.name = name
        this.id = id
        this.job = job
    }
}

class Student extends Person{
    constructor(name, id, job){
        super(name, id, job)
    }
}

const person = new Person('Mark', 123, 'Banker')
const human = new Student('Jon', 321, 'Student')
console.log(person, human);










// Object Destructuring
const sakib = {
    name: 'sakib',
    newObj:{
        position: 'All-rounder',
        income:{
            perMonth: '$12345'
        }
    }
}



// const {name} = sakib
const {newObj: {income: {perMonth:earnings}}} = sakib
console.log(earnings);



const tamim = {
    name: 'Tamim',
    anoObj:{
        profession: 'Cricketer'
    }
}

const {anoObj: {profession:title}} = tamim
console.log(title);





// Filter in object
const products = [
    {name: "Smart Watch", price: 1000},
    {name: "Samsung", price: 2000, findElement: "find"},
    {name: "Apple", price: 7000},
]


const productPrice = (prices => console.log(prices.filter(proPrice => proPrice.price > 1000)))(products)
const mapUsing = (element => console.log(element.map(ele => ele.price)))(products);
const findUsing = (findElement => console.log(findElement.find(findEach => findEach.findElement)))(products);
const someUsing = (someElement => console.log(someElement.some(someEle => someEle.price === 1000)))(products);






// Reduce
const numbers = [10,20,3,0,50,40]
const sum = numbers.reduce((num, sum) => num += sum,0)
console.log(sum);