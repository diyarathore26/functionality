function isPrime(num) {
  let ans=true
    if (num < 2) {
      ans= false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
         ans= false;
        }
    }
    console.log(ans);
}
isPrime(11);
