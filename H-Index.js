const solution = (citations) => {
    let hIndex = 0 // hIndex 는 0 으로 초기화한다 (반복문 인덱스로 사용할 것)
    citations.sort((a,b) => (b-a)) // 인용된 논문 횟수를 내림차순으로 먼저 sorting 한다
    
    while(hIndex + 1 <= citations[hIndex]) { // 원소의 값과 조건에 맞게 인용된 원수의 수를 구해야 하기 때무녜 hIndex를 1씩 증가하면서 카운팅한다
        hIndex++
    }
    return hIndex
}
