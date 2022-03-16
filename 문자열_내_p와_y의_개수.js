const solution = (s) => {
    s = s.toUpperCase();
    let pCount = 0, yCount = 0;
    
    for(const e of s) {
        if(e === 'P') pCount++;
        else if(e === 'Y') yCount++;
    }
    
    return pCount === yCount;
}
