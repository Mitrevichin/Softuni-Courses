function worldSwimmingRecord (input) {
    let recordInSeconds = Number(input[0]);
    let distaceInMeters = Number(input[1]);
    let secondsForOnemeter = Number(input[2]);

    let wholeDistanceInSeconds = distaceInMeters * secondsForOnemeter;
    let delaySeconds = Math.floor(distaceInMeters / 15) * 12.5;

    let timeNeededInSeconds = wholeDistanceInSeconds + delaySeconds;
    
    if (timeNeededInSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${timeNeededInSeconds.toFixed(2)} seconds.`);
    } else {
        let failedSeconds =  timeNeededInSeconds - recordInSeconds;
        console.log(`No, he failed! He was ${failedSeconds.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord (["10464","1500","20"])
