const solution = (n) => {
    const primes = new Array(n).fill(true);
  
    primes[0] = false;
    for (let i = 2; i ** 2 <= n; i++) {
        if (primes[i - 1] === true) {
            for (let j = i ** 2; j <= n; j += i) {
                primes[j - 1] = false;
            }
        }
    }
    return primes.filter((e) => e).length;
}
