function solution(numbers) {
    let answer = Array(9).fill().map((e,i) => i+1);
    answer = answer.filter((e) => !numbers.includes(e));
    return answer.reduce((acc, cur) => acc+cur);
}
