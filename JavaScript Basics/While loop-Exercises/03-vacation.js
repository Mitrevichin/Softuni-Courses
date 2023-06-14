function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let currMoney = Number(input[1]);
    let i = 2;

    let action = input[i];
    i++;
    let moneySpendOrSaved = input[i];
    i++;

    let daysCounter = 0;
    let daysSpend = 0;

    while (currMoney < moneyNeeded) {
        moneySpendOrSaved = Number(moneySpendOrSaved);

        if (action === 'spend') {
            daysSpend++;
            if (moneySpendOrSaved > currMoney) {
                currMoney = 0;
            } else {
                currMoney -= moneySpendOrSaved;
            }
        } else if (action === 'save') {
            currMoney += moneySpendOrSaved;
            daysSpend = 0;
        }

        daysCounter++;

        action = input[i];
        i++;

        moneySpendOrSaved = input[i];
        i++;

        if (daysSpend >= 5) {
            console.log("You can't save the money.");
            console.log(`${daysCounter}`);
            break;
        }

    }

    if (currMoney >= moneyNeeded) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
    vacation(["110",

    "60",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10","spend", "10"]);