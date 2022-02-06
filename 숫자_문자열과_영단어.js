function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < numbers.length; i++) {
        if(s.search(numbers[i]) >= 0) {
            s = s.split(numbers[i]).join(i);
        }
    }
    
    return parseInt(s);
}
