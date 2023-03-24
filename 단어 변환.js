const solution = (begin, target, words) => {
    if(!words.find(v => v === target)) return 0
    let minCount = 51
    
    const dfs = (begin, target, words, count) => {
        if(begin === target){
            minCount =  Math.min(minCount, count)
        }
        for(const w of words){
            let diff = 0;
            for(let i = 0; i < begin.length; i++){
                if(begin[i] !== w[i]){
                    diff++
                }
            }
            if(diff === 1){
                dfs(w, target, words.filter(w0 => w0 !== w), count+1)
            }
        }
        return
    }
    dfs(begin, target, words, 0)
    return minCount < 51 ? minCount : 0
}

/*
* 0. words 에 target 이 없으면 0을 리턴한다
* 1. words 에서 begin 과 한글자만 다른 경우를 찾는다
    1-1. 찾을 경우 begin 에 words 의 해당 단어를 할당하고 filter 시킨다. count + 1
* 2. 남은 words에서 다시 begin과 한글자만 다른 경우를 찾아 1-1를 반복한다
* 3. minCount 가 51 보다 작으면 minCount 를 리턴, 그대로면 0을 리턴한다
*/
