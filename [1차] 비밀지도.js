const solution = (n, arr1, arr2) => {
    
    const one = arr1.map((v) => v.toString(2).padStart(n, '0'));
    const two = arr2.map((v) => v.toString(2).padStart(n, '0'))
    
    const result = [];
    
    for(let i = 0; i < one.length; i ++) {
        let value = "";
        for(let j = 0; j < one[i].length; j++) {
            if(one[i][j] === '0' && two[i][j] === '0') {
                value += ' ';
            } else value += '#'
        }
        result.push(value);
    }
    
    return result;
}
