function smartLilly(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let birthday = 1; birthday <= age; birthday++) {

        if (birthday % 2 !== 0) {
            moneySaved += pricePerToy;
        } else {
            moneySaved += (moneyGiven - 1);
            moneyGiven += 10;
        }
    }

    if (moneySaved >= laundryPrice) {
        let moneyLeft = moneySaved - laundryPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = laundryPrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }

}

smartLilly(["10","170.00","6"]);