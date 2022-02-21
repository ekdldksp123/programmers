const solution = (nums) => {
    const combinations = getCombinations(nums, 3);
    let result = 0;
    
    for(let i = 0; i < combinations.length; i++) {
        let count = 0;
        const sum = combinations[i].reduce((acc,cur) => {return acc+cur});
        for(let j = 2; j <=sum; j++) {
            if(sum % j === 0) count ++;
        }
        if(count === 1) result++;
    }
    return result;
}


const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((combination) => [fixed, ...combination]); 
    results.push(...attached); 
  });

  return results;
}
