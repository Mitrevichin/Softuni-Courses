function walking(input) {

    let goalSteps = 10000;
    let totalSteps = 0;

    let index = 0;
    let dailySteps = input[index];
    index++;

    while (dailySteps !== 'Going home') {
        dailySteps = Number(dailySteps);

        totalSteps += dailySteps;

        if (totalSteps >= goalSteps) {
            break;
        }

        dailySteps = input[index];
        index++;
    }

    if (dailySteps === 'Going home') {
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;

        if (totalSteps >= goalSteps) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - goalSteps} steps over the goal!`);
        } else {
            console.log(`${goalSteps - totalSteps} more steps to reach goal.`);
        }
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goalSteps} steps over the goal!`);
    }


}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);