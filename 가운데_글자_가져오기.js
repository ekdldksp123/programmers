const solution = (s) => {
    if(s.length % 2 !== 0) return s[Math.floor(s.length/2)]
    else {
        const mid = s.length / 2;
        return s.substr(mid-1, 2);
    }
}
