function skiTrip(input) {
    let daysOfStay = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let price = 0;
    let nightsOfStay = daysOfStay - 1;

    switch (roomType) {
        case 'room for one person':
            price = nightsOfStay * 18
            break;
        case 'apartment':
            if (nightsOfStay < 10) {
                price = (nightsOfStay * 25) * 0.70;
            } else if (nightsOfStay <= 15) {
                price = (nightsOfStay * 25) * 0.65;
            } else {
                price = (nightsOfStay * 25) * 0.50;
            }
            break;
        case 'president apartment':
            if (nightsOfStay < 10) {
                price = (nightsOfStay * 35) * 0.90;
            } else if (nightsOfStay >= 10 && nightsOfStay <= 15) {
                price = (nightsOfStay * 35) * 0.85;
            } else {
                price = (nightsOfStay * 35) * 0.80;
            }
            break;

    }

    if (feedback === 'positive') {
        price *= 1.25;
    } else if (feedback === 'negative') {
        price *= 0.90;
    }

    console.log(`${price.toFixed(2)}`);

}

skiTrip(["30",

    "president apartment",

    "negative"]);