//flat & flatmap

//flattens the array removing the nested arrays but only one lv deep
const arr = [[1, 2, 3], 4, [5, 6, 7]];
console.log(arr.flat());

//num argument specifies how deep the flattening should be
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((sum, mov) => sum + mov);

//flatmap combines flat & map - only one lv deep
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, mov) => sum + mov);

console.log(overallBalance);
console.log(overallBalance2);
