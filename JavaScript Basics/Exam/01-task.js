function excursion(input) {
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let trasportCardsCount = Number(input[2]);
    let ticketsCount = Number(input[3]);

    let nightsPrice = nightsCount * 20;
    let trasportCardsPrice = trasportCardsCount * 1.60;
    let ticketsPrice = ticketsCount * 6;

    let totalPricePerPerson = nightsPrice + trasportCardsPrice + ticketsPrice;
    let totalPriceTheWholeGroup = peopleCount * totalPricePerPerson;
    let totalPriceWithExpences = totalPriceTheWholeGroup * 1.25;

    console.log(totalPriceWithExpences.toFixed(2));

}

excursion([20, 14, 30, 6,]);