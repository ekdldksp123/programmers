const solution = (nums) => {
    let answer = 0;
    
    const set = [...new Set(nums)];
    answer = set.length;
    if(answer > nums.length/2) answer = nums.length/2;
    
    return answer;
}
