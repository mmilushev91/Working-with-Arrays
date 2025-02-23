//some & every

//includes checks for equality
const anyDeposit = movements.some(mov => mov > 0); // return true or false

//condition
console.log(movements.some(mov => mov === -130));

console.log(movements);
console.log(movements.includes(-130));

//every returns true if all elements from the array satistfy the condition
movements.every(mov => mov > 0);
