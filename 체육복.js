
const solution = (n, lost, reserve) => {

    let res = reserve.sort().filter(v => !lost.includes(v));
    let los = lost.sort().filter(v => !reserve.includes(v));
    
    los = los.filter((v) => {
        if(res.findIndex(e => Math.abs(e-v) === 1) === -1) return true;
        else {
            res.splice(res.indexOf(res.find(e => Math.abs(e-v) === 1)), 1);
            return false;
        }
    });
    return n - los.length;
}
