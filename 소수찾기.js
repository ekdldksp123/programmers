const solution = (n) => {
    let range = new Array(n).fill([]);
    range = range.map((v, i) => v.push(i+1));
    
    return range.filter((v, idx) => {
        let i = 1;
        let measures = [];
        while(i <= v) {
            if(v % i === 0 && i !== 1) measures.push(i);
            i++;
        }
        if(measures.length === 1) return true;
        else return false;
    }).length;
}
