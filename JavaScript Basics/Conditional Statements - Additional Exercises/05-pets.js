function pets(input) {
    let days = Number(input[0]);
    let plannedFoodKg = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catFoodKg = Number(input[3]);
    let tortoiseFoodGram = Number(input[4]);
    
    let tortoiseFoodKg = tortoiseFoodGram / 1000;
    let totalConsumedFoodFor2Days = (dogFoodKg + catFoodKg + tortoiseFoodKg) * days;

    if (plannedFoodKg >= totalConsumedFoodFor2Days) {
        let leftFood = plannedFoodKg - totalConsumedFoodFor2Days;
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        let neededFood = totalConsumedFoodFor2Days - plannedFoodKg;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }
}

pets(['5', '10', '2.1', '0.8', '321'])