function toyShop (input) {
    let costVacation = Number(input[0]);

    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let tedyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzelPrice = puzzelsCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let tedyBearsPrice = tedyBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalCount = puzzelsCount + dollsCount + tedyBearsCount + minionsCount + trucksCount;
    let totalPrice = puzzelPrice + dollsPrice + tedyBearsPrice + minionsPrice + trucksPrice;

    if (totalCount >= 50) {
        totalPrice = 0.75 * totalPrice;
    }

    totalPrice = 0.90 * totalPrice;
    
    if (totalPrice >= costVacation) {
        let moneyLeft = totalPrice - costVacation;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = costVacation - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}

toyShop (["320",
"8",
"2",
"5",
"5",
"1"])

