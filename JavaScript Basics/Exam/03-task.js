function santasHoliday(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nightsCount = days - 1;
    let totalPrice = 0;

    switch (roomType) {
        case 'room for one person':
            if (days < 10) {
                totalPrice = nightsCount * 18;
            } else if (days <= 15) {
                totalPrice = nightsCount * 18;
            } else {
                totalPrice = nightsCount * 18;
            }
            break;
        case 'apartment':
            if (days < 10) {
                totalPrice = (nightsCount * 25) * 0.70;
            } else if (days <= 15) {
                totalPrice = (nightsCount * 25) * 0.65;
            } else {
                totalPrice = (nightsCount * 25) * 0.50;
            }
            break;
        case 'president apartment':
            if (days < 10) {
                totalPrice = (nightsCount * 35) * 0.90;
            } else if (days <= 15) {
                totalPrice = (nightsCount * 35) * 0.85;
            } else {
                totalPrice = (nightsCount * 35) * 0.80;
            }
            break;
    }

    if (feedback === 'positive') {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));
}

santasHoliday(["14",
"apartment",
"positive"]);
