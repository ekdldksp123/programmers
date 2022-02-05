function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    let list = {};
    
    id_list.map((e) => list[e] = new Set());
    for(const e of report) {
        const users = e.split(' ');
        list[users[1]] = list[users[1]].add(users[0]);
    }
    
    for(let i = 0; i < id_list.length; i ++) {
        const set = list[id_list[i]];
        if(set.size >= k) {
            for(const v of set){
                answer[id_list.indexOf(v)] ++;
            }
        }
    }
    
    return answer;
}
