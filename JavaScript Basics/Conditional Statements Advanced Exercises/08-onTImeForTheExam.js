function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let late = 'Late';
    let onTime = 'On time';
    let early = 'Early';

    let examTimeInMinutes = (examHour * 60) + examMinute;
    let arrivalTimeInMinutes = (arrivalHour * 60) + examMinute;
    let totalMinutesDifference = arrivalTimeInMinutes - examTimeInMinutes;

    let studentArrival = late;
    let result = '';

    if (totalMinutesDifference < -30) {
        studentArrival = early;
    } else if (totalMinutesDifference <= 0){
        studentArrival = onTime;
    }

    if (totalMinutesDifference !== 0) {
        let hourDiffierence = Math.abs(~~(totalMinutesDifference / 60));
        let minuteDiffrence = Math.abs(totalMinutesDifference % 60)
    }

    if (hourDiffierence > 0) {
        result = hourDiffierence + ':' + (minuteDiffrence > 9 ? minuteDiffrence : '0' + minuteDiffrence) + 'hours;'
    } else {
        result = minuteDiffrence + "minutes";
    }

    if (totalMinutesDifference < 0) {
        result += "before the start";
    } else {
        result += "after the start";
    }

    console.log(studentArrival);
    if (result) {
        console.log(result);
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);