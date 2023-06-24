function fuelTank(input) {
    let fuelType = input[0];
    let litersInTheTank = Number(input[1]);

    if (litersInTheTank >= 25) {
        console.log(`You have enough ${fuelTank}.`);
    } else {
        console.log(`Fill your tank with ${fuelTank}!`);
    }
}

fuelTank(['Diesel', '10'])