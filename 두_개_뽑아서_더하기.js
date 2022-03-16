const solution = (numbers) => {
    const answer = [];
    const arr = getCombinations(numbers, 2).map(v => v.reduce((acc,cur) => acc+cur,0));
    
    return Array.from(Set(arr)).sort((x,y) => x-y);
}

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}
