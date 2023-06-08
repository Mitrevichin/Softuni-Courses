function timePlus15Minutes (input) {
    let initialHour = Number(input[0]);
    let initialMin = Number(input[1]);

    let totalMins = initialHour * 60 + initialMin + 15;

    let hour = Math.floor (totalMins / 60);
    let mins = totalMins % 60;
   
    if (hour === 24) {
        hour = 0;
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`);
    } else {
        console.log(`${hour}:${mins}`);
    }


}

timePlus15Minutes (['1', '46'])