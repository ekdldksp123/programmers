const solution = (sizes) => {
    const arr = sizes.map((v) => v.sort((x,y) => y-x));
    
    let xMax = 0;
    let yMax = 0;
    
    for(const e of arr) {
        xMax = Math.max(e[0], xMax);
        yMax = Math.max(e[1], yMax);
    }
    
    return xMax * yMax;
}

/*
* 1. 주어진 2차원 배열을 순회하면서 각 요소를 내림차순으로 정렬한다 (x,y축 상관없음)
* 2. 이제 for 문을 돌면서 x축의 최대값, y축의 최댓값을 구한다
* 3. 두 수의 곱을 리턴하면 끝!!!
*/
