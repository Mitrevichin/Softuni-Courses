function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === 'May' || month === 'October') {
            priceStudio = nightsCount * 50;
            priceApartment = nightsCount * 65;
        if (nightsCount > 7 && nightsCount < 14) {
            priceStudio *= 0.95;
        } else if (nightsCount > 14) {
            priceStudio *= 0.70;
            priceApartment *= 0.90;
        }
    } else if (month === 'June' || month === 'September') {
        priceStudio = nightsCount * 75.20;
        priceApartment = nightsCount * 68.70;
        if (nightsCount > 14) {
            priceStudio *= 0.80;
            priceApartment *= 0.90;
        }
    } else if (month === 'July' || month === 'August') {
        priceStudio = nightsCount * 76;
        priceApartment = nightsCount * 77;
        if (nightsCount > 14) {
            priceApartment *= 0.90;
        }
    }


    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May",

    "15"])