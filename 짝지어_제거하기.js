function solution(s) {
    const stack = []
    for(const e of s) {
        if(stack[stack.length - 1] === e) {
            stack.pop()
        } else stack.push(e)
    }
    return stack.length === 0 ? 1 : 0
}
