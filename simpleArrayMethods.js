//Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
//first parameter begin
//does not mutate the original array
//instead returns a copy
console.log(arr.slice(2));
//second parameter is end not enclusive
console.log(arr.slice(2, 4));
//negative begin parameter begins to copy from the end
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
//creating a shallow coppy
console.log(arr.slice());

console.log('-----------------------------');
//SPLICE
//change the original array

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE

//change the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
//doesn't change original array
const letters = arr.concat(arr2);
console.log(letters);

//JOIN
console.log(letters.join(' - '));
