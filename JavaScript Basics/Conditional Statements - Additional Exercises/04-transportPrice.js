function transportPrice (input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];

    let price = 0;
    let taxiRate = 0;

    if (dayOrNight === 'day') {
        taxiRate = 0.79;
    } else {
        taxiRate = 0.90;
    }

    if (km < 20) {
        price = 0.70 + (km * taxiRate)
    } else if (km <100) {
        price = km * 0.09;
        
    } else {
        price = km * 0.06;
    }

    console.log(price.toFixed(2));
}

transportPrice (['25','day'])