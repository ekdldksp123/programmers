function solution(array, commands) {
    let answer = [];

    for(var i = 0; i < commands.length; i++) {
        
        let part = array.slice(commands[i][0]-1, commands[i][1]);
        part.sort((x,y) => x-y);
        answer.push(part[commands[i][2]-1]);
    }
    return answer;
}