function foodDelivery (input) {

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);

    let chickenPrice = chickenMenus * 10.35;
    let fishPrice = fishMenus * 12.40;
    let vegPrice = vegMenus * 8.15;
    let menusPrice = chickenPrice + fishPrice + vegPrice;
    let dessertPrice = menusPrice * 0.2;

    let finalSum = menusPrice + dessertPrice + 2.50;

    console.log(finalSum);

}

foodDelivery(['2','4','3'])


