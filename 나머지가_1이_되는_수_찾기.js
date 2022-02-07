const solution = (n) => {
    let min = n-1;
    for(let i = 2; i <= n-1; i++) {
        if((n-1) % i === 0) min = Math.min(i, min);
    }
    return min;
}
