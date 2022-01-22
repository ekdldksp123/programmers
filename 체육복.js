const solution = (n, lost, reserve) => {
    let answer = n;

    for(let i in lost) {
        if(reserve.includes(i)) reserve = reserve.filter(v=> v!== i);
    }
    
    for(let e of lost) {
        if(reserve.includes(e--)) {
            reserve.splice(reserve.indexOf(e--), 1);
        } else if(reserve.includes(e++)) {
            reserve.splice(reserve.indexOf(e++), 1);
        } else {
            answer --;
        }
    }
        
    return answer;
}