const solution = (price, money, count) => {
    let cnt = 1;
    let totalFee = 0;
    while(cnt <= count) {
        totalFee += cnt * price;
        cnt++;
    }
    let answer = 0;
    if(totalFee > money) {
        answer = totalFee - money;
    }
    return answer;
}
