//1. how much was deposited in bank from all accounts

const calcTotalDeposited = function (accounts) {
  let totalDeposited = 0;

  accounts.forEach(function (acc) {
    const currentAccountDeposits = acc.movements
      .filter(mov => mov > 0)
      .reduce((sum, mov) => sum + mov, 0);
    totalDeposited += currentAccountDeposits;
  });

  return totalDeposited;
};

console.log(calcTotalDeposited(accounts));

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

console.log(bankDepositSum);

//2. count how many deposits there are with at least 1000 $

const deposits1000Count = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

console.log(deposits1000Count);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, el) => (el >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

let a = 10;
//++ returns the value before incrementing
console.log(a++);

//prefix operator
console.log(++a);

//3.create an object that contains the sum of deposits and widthrawals

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, mov) => {
      mov > 0 ? (sums.deposits += mov) : (sums.withdrawals += mov);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//4. this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  return title
    .toLowerCase()
    .split(' ')
    .map(word =>
      !expections.includes(word)
        ? word.replace(word[0], word[0].toUpperCase())
        : word
    )
    .join(' ');
};

console.log(convertTitleCase('tHis is a nIce title'));
