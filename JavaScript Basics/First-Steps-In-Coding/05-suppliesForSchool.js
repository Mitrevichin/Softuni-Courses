function suppliesForSchool (input) {

    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let litersCleaningLiquid = Number(input[2]);
    let percentDiscountDecimal = Number(input[3]) / 100;

    let pencilsTotal = pencils * 5.80;
    let markersTotal = markers * 7.20;
    let litersCleaningLiquidTotal = litersCleaningLiquid * 1.20;
    let totalSum = pencilsTotal + markersTotal + litersCleaningLiquidTotal;
    let finalSumWithDiscount = totalSum - (percentDiscountDecimal * totalSum);

    console.log(finalSumWithDiscount);
}

suppliesForSchool(['2','3','4','25'])

