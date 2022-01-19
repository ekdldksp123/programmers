const getMeasure = (number) => {
    let measures = [];
    for(let i = 1; i <= number; i ++) {
        if(number % i == 0) measures.push(i);
    }
    return measures;
}

function solution(left, right) {
    let numbers = [...Array(right-left +1)].map((value, idx) => left + idx);
    var answer = 0;
    for(let i =0; i < numbers.length; i++) {
        //약수의 개수
        const measures = getMeasure(numbers[i]);
        
        if(measures.length % 2 == 0) {
            answer += numbers[i];
        } else answer -= numbers[i];
    }
   
    return answer;
}