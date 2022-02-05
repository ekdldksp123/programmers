function solution(new_id) {
    let id = new_id.toLowerCase().replace(/[^\w-._]+/g,'').split('\.').filter((e) => e !== '').join('.');
    if(id.length === 0) {
        for(let i=0; i < new_id.length; i++) {
            id+='a';
        }
    } else if(id.length >= 16) {
        id = id.substr(0,15);
        id = id.split('\.').filter((e) => e !== '').join('.');
    } else if( id.length <= 2 ) {
        for(let i = 0; i < 3-id.length; i++) {
            id+=id.charAt(id.length-1);
        }
    }
    return id;
}
