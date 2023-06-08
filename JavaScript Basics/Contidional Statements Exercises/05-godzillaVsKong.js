function godzillaVsKong(input) {
    let budgetMovie = Number(input[0]);
    let countStatists = Number(input[1]);
    let costClothsPerStatist = Number(input[2]);

    let decorPrice = 0.10 * budgetMovie;
    let totalClothesPrice = costClothsPerStatist * countStatists;

    if (countStatists > 150) {
        totalClothesPrice = totalClothesPrice * 0.90;
    }

    let totalMovieCost = totalClothesPrice + decorPrice;

    if (totalMovieCost > budgetMovie) {
        let moneyNeeded = totalMovieCost - budgetMovie;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budgetMovie - totalMovieCost;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}

godzillaVsKong (["15437.62",
"186",
"57.99"])

