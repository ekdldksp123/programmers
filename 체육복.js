function solution(n, lost, reserve) {
    var answer = 0;

    for(let i in lost) {
        if(reserve.includes(i)) reserve = reserve.filter(v=> v!== i);
    }
    
    for(let i=0; i < lost.length; i++) {
        if(reserve.includes(lost[i]++) || reserve.includes(lost[i]--)) {
            answer++;
        }
    }
    
    if(lost.length === answer) answer = n;
    else if(answer < lost.length) {
        let temp = answer;
        answer = n - temp;
    }

    return answer;
}