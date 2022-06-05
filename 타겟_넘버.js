const solution = (numbers, target) => {
    
    let answer = 0
    const length = numbers.length
    
    //closure 활용하기
    const dfs = (count, sum) => {
        if(count === length) {
            if(target === sum) answer++
            return; //함수 자체를 종료시킨다
        }
        // 더하기나 빼기를 집어넣고 if 문을 빠져나올때까지 계속해서 재귀를 하므로써 경우의 수를 구할 수 있다
        dfs(count + 1, sum + numbers[count])
        dfs(count + 1, sum - numbers[count])
    }
    
    dfs(0,0)
    
    return answer
}
