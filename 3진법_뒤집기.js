const solution = (n) => {
    const threeNotation = [];
    let count = 0;
    
    while(count >= 0) {
        if(Math.pow(3, count) > n ) {
            count--;
            threeNotation.push(count);
            n -= Math.pow(3, count);
            if(n === 0) break;
        } else count++;
    }
    
    threeNotation.sort((x,y) => y-x);
    const arr = Array(threeNotation[0] + 1).fill(0)
        .map((v,i) => threeNotation.filter(e => e === i).length).reverse();
    
    return arr.reduceRight((acc,cur,idx) => {
        acc+= Math.pow(3, idx) * cur;
        return acc;
    },0);
}
