function shopping (input) {
    let budgetPetar = Number(input[0]);

    let numberVideoCards = Number(input[1]);
    let numberProcessors = Number(input[2]);
    let numberRam = Number(input[3]);

    let costVideoCards = numberVideoCards * 250;
    let costProcessorsPer = 0.35 * costVideoCards;
    let costRamPer = 0.10 * costVideoCards;

    let totalCostProcessors = numberProcessors * costProcessorsPer;
    let totalCostRam = numberRam * costRamPer;

    let totalCostShopping = costVideoCards + totalCostProcessors + totalCostRam;

    if (numberVideoCards > numberProcessors) {
        totalCostShopping = 0.85 * totalCostShopping;
    }

    if (budgetPetar >= totalCostShopping) {
        let budgetLeft = budgetPetar - totalCostShopping;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalCostShopping - budgetPetar;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }

}

shopping (["920.45",
"3",
"1",
"1"])

