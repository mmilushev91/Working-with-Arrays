// findLast and findLastIndex

const lastWithdrawal = movements.findLast(mov => mov < 0);
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
