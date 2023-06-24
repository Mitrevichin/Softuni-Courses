function sleepyTomCat (input) {
    let freeDays = Number(input[0]);

    let workingDays = 365 - freeDays;
    let timeForPlayFreeDays = freeDays * 127;
    let timeForPlayWorkingDays = workingDays * 63;
    let totalTimeForPlay = timeForPlayFreeDays + timeForPlayWorkingDays;
    let normDifference = Math.abs(30000 - totalTimeForPlay);
    
    let normDifferenceHours = normDifference / 60;
    let normDifferenceMins = normDifference % 60;
    
    if (totalTimeForPlay > 30000) {
        console.log('Tom will run away');
        console.log(`${Math.floor(normDifferenceHours)} hours and ${Math.floor(normDifferenceMins)} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${Math.trunc(normDifferenceHours)} hours and ${Math.trunc(normDifferenceMins)} minutes less for play`);
    }

}

sleepyTomCat (['113'])