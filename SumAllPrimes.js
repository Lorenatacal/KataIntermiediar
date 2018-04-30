
function sumPrimes(num) {
    var primeArr = [1];
    var sumPrime = 0;
    function isPrime(number) {
        for(var i=2; i< number; i++){
            if(number % i === 0) return false;
        }
        return number !== 1;
    }
    for(var j = 1; j <= num; j++) {
        if(isPrime(j)) primeArr.push(j);
    }   
    console.log(primeArr)
    sumPrime = primeArr.reduce((x,y) => x+y);
    return sumPrime;
}
  console.log(sumPrimes(977));
  