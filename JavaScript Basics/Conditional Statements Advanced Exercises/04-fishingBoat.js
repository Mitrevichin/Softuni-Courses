function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let rentShip = 0;

    switch (season) {
        case 'Spring': rentShip = 3000;
        if (fishermanCount <= 6) {
            rentShip *= 0.90;
        } else if (fishermanCount <= 11) {
            rentShip *= 0.85;
        } else {
            rentShip *= 0.75;
        }
            break;

        case 'Summer': rentShip = 4200;
        if (fishermanCount <= 6) {
            rentShip *= 0.90;
        } else if (fishermanCount <= 11) {
            rentShip *= 0.85;
        } else {
            rentShip *= 0.75;
        }
            break;

        case 'Autumn': rentShip = 4200;
        if (fishermanCount <= 6) {
            rentShip *= 0.90;
        } else if (fishermanCount <= 11) {
            rentShip *= 0.85;
        } else {
            rentShip *= 0.75;
        }
            break;

        case 'Winter': rentShip = 2600;
        if (fishermanCount <= 6) {
            rentShip *= 0.90;
        } else if (fishermanCount <= 11) {
            rentShip *= 0.85;
        } else {
            rentShip *= 0.75;
        }
            break;
    
        default:
            break;
    }

    
    if (fishermanCount % 2 === 0 && season !== 'Autumn') {
        rentShip *= 0.95;
    }

    if (budget >= rentShip) {
        let moneyLeft = budget - rentShip;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = rentShip - budget;
        console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}

fishingBoat (["2000", "Winter", "13"]);