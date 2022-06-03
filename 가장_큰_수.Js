const solution = (numbers) => {
    numbers.sort((x,y) => {
        if(`${x}`.length === `${y}`.length) return y - x
        else return Number(`${y}${x}`) - Number(`${x}${y}`)
    })
    if(numbers.filter(v => v !== 0).length === 0) return "0"
    return numbers.map(v => String(v)).join('')
}
