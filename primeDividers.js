function primeFactors(n) {
  let arr = [];
  let i = 2;
  while (i <= n) {
    if (n % i == 0) {
      n = n / i;
      arr.push(i);
      i++;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(primeFactors(60));
