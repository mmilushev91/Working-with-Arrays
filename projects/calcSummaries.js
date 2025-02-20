const calcDisplaySummaries = function(movements) {
  const income = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;
  
  const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  
  const interest = movements.filter(mov => mov > 0).map(mov => mov * 0.012).filter(mov => mov > 1).reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
}

calcDisplaySummaries(account1.movements);
