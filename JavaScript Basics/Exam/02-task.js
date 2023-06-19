function braceletStand(input) {
    let personalMoney = Number(input[0]);
    let dailyMoneyWontPerDay = Number(input[1]);
    let expenses = Number(input[2]);
    let presentPrice = Number(input[3]);

    let savedPersonalMoney = personalMoney * 5;
    let dailyMoneyWont = dailyMoneyWontPerDay * 5;
    let totalSavedMoney = (savedPersonalMoney + dailyMoneyWont) - expenses;

    if (totalSavedMoney >= presentPrice) {
        console.log(`Profit: ${totalSavedMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(presentPrice - totalSavedMoney).toFixed(2)} BGN.`);
    }
}

braceletStand([5.12, 32.05, 15, 150,]);