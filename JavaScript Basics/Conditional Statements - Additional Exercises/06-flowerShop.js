function flowerShop (input) {
    let magnoliaCount = Number(input[0]);
    let zyumbyulCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusesCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let magnoliaPrice = magnoliaCount * 3.25;
    let zyumbyulPrice = zyumbyulCount * 4;
    let rosesPrice = rosesCount * 3.50;
    let cactusesPrice = cactusesCount * 8;

    let totalOrderPrice = magnoliaPrice + zyumbyulPrice + rosesPrice + cactusesPrice;
    totalOrderPrice = totalOrderPrice * 0.95;

    if (totalOrderPrice >= presentPrice) {
        let leftMoney = totalOrderPrice - presentPrice;
        console.log(`She is left with ${Math.floor(leftMoney)} leva.` );
    } else {
        let neededMoney = presentPrice - totalOrderPrice;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.` );
    }
}

flowerShop (['15','7','5','10','100'])