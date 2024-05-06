// For of loop
const arr = [1,2,3,4,5,6];
for (const num of arr) {
    // console.log(num);
}
const STRS ="Varun";
for(const char of STRS){
    // console.log(char);
}
const nums = "123456";
for(const n of nums){
    // console.log(n);
}

// Map(it is a object which has key, value pair and stored value in secific order and values will be unique)
const arr1 = [1,2,3,4,5,6]; 
const map = new Map();
map.set("IN","India");
map.set("US","USA");
map.set("UK","UK");
map.set("JP","Japan");

// First Syntax
// console.log(map);
// for(const key of map.values()){
//     console.log(key);
// }

// Second Syntax (More enhanced)
// for(const key of map){
//     console.log(map);
//     // console.log(key);
// }

// Third Syntax (Best way)
// for(const[key,value] of map){
//     console.log(key,":-",value);
// }


// How to iterate an object
const myObj = {
    "js":"Javascript",
    "rb":"ruby",
    "py":"python",
    "go":"golang"
}
// Wrong way it will not work
// for(const [key,value] of myObj){
//     console.log(key,":-",value);    
// }

// Correct way
// 1) Forin
for (const key in myObj) {
    // console.log(key);
    // console.log(`${key} is shortcut for ${myObj[key]} `);
}

// *************************************************************
// More usecases for forin (We can not iterate maps using forin)
const arrx = [1,2,3,4,5,6]
for (const key in arrx) {
    // console.log(key);
    // console.log(`The value at ${key} index is ${arrx[key]}`);
}
// For each loop(will not return new array),(I can iterte through array and object as well)
const arry = [1,2,3,4,5]

// Both are correct
arr.forEach(element=>{
    // console.log(element);
})

arry.forEach(function(val){
    // console.log(val);
});

// map(return new array)
let newArr = arry.map(function(val){
    return val*2;
})
console.log(newArr);

const objx = [
    {
        name:"Varun",
        age:22
    },
    {
        name:"Varun1",
        age:23
    },
    {
        name:"Varun2",
        age:24
    }
]
objx.forEach((item)=>{
  console.log(item.age);
})

// Using Filter
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using filter on objects
const students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 18 },
    { name: 'Eve', age: 21 }
];

// Filter students older than 20
const olderStudents = students.filter(student => student.age > 20);
console.log(olderStudents);

