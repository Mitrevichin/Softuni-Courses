function lunchBreak(input) {
    let nameMovie = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = (1 / 8) * breakDuration;
    let leisureDuration = (1 / 4) * breakDuration;
    let timeLeftFromBreak = breakDuration - (lunchDuration + leisureDuration);

    if (timeLeftFromBreak >= episodeDuration) {
        let finalTimeLeft = timeLeftFromBreak - episodeDuration;
        console.log(`You have enough time to watch ${nameMovie} and left with ${Math.ceil(finalTimeLeft)} minutes free time.`);
    } else {
        let timeNeeded = episodeDuration - timeLeftFromBreak;
        console.log(`You don't have enough time to watch ${nameMovie}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

    }

    lunchBreak (["Teen Wolf",
    "48",
    "60"])
    
