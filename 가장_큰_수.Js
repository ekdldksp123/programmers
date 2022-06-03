const solution = (numbers) => {
    numbers.sort((x,y) => {
        if(`${x}`.length === `${y}`.length) return y - x
        else return Number(`${y}${x}`) - Number(`${x}${y}`)
    })
    return numbers.map(v => String(v)).join('')
}
