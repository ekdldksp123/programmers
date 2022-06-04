const solution = (clothes) => {
  let answer = 1

  let table = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1
    return acc
  }, {})

  for (const key in table) {
    answer *= table[key] + 1
  }

  return answer - 1 
}

/* 
 * [ 같은 의류로 조합되지 않는 경우의 수 구하기 ]
 * 1. 일단 clothes 배열에 존재하는 옷의 종류를 기준(key)으로 해당 종류의 옷의 개수를 세어 객체를 생성한다.
 * 2. 최소 의상의 개수는 1 이닉한 생성된 객체에서 모든 옷 종류를 개별적으로 1씩 증가시킨다.
 * 3. 마지막으로 객체의 value를 모두 곱해주고 -1을 해서 리턴한다. -1 은 모든 옷 종류를 안입을 경우!!(라고 답지에서 말한다...)
*/
