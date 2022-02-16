const solution = (x) => {
    const arr = `${x}`.split('');
    return x % arr.reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    }) === 0;    
}
