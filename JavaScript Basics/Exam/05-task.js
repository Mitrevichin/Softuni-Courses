function hairSalon(input) {
    let index = 0;

    let dailyProfitTarget = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let dailyProfit = 0;
    let isTargetReached = false;

    while (command !== "closed") {
        let serviceType = command;
        let subService = input[index];

        if (serviceType === 'haircut') {

            if (subService === 'mens') {
                dailyProfit += 15;
            } else if (subService === 'ladies') {
                dailyProfit += 20;
            } else {
                dailyProfit += 10;
            }

        } else if (serviceType === 'color') {

            if (subService === 'touch up') {
                dailyProfit += 20;
            } else if (subService === 'full color') {
                dailyProfit += 30;
            }
        }

        index++;
        command = input[index];

        index++;
        subService = input[index];

        if (dailyProfit >= dailyProfitTarget) {
            isTargetReached = true;
            break;
        }

    }

    if (isTargetReached) {
        console.log("You have reached your target for the day!");
    } else {
        console.log(`Target not reached! You need ${dailyProfitTarget - dailyProfit}lv. more.`);
    }
    
    console.log(`Earned money: ${dailyProfit}lv.`);
}

hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies",
    'closed']);

