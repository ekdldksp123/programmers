const solution = (numbers) => {
    if(numbers.filter(v => v !== 0).length === 0) return "0"
    
    numbers.sort((x,y) => {
        if(`${x}`.length === `${y}`.length) return y - x
        else return Number(`${y}${x}`) - Number(`${x}${y}`)
    })
    
    return numbers.map(v => String(v)).join('')
}
