function harvest (input) {
    let squareMetersVineyard = Number(input[0]);
    let kgVineforOneSquareMeter = Number(input[1]);
    let neededLitersVineForSale = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = squareMetersVineyard * kgVineforOneSquareMeter;
    let vineProduction = totalGrapes * 0.4;
    let wine = vineProduction / 2.5;

    if (wine < neededLitersVineForSale) {
        let neededWine = neededLitersVineForSale - wine;
        console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`);
    } else if (wine >= neededLitersVineForSale) {
        let leftWine = wine - neededLitersVineForSale;
        let winePerWorker = leftWine / workers;
        console.log(`Good harvest this year! Total wine: ${Math.trunc(wine)} liters.`);
        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
}

harvest (['1020', '1.5', '425', '4'])