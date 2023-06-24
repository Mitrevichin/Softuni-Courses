function pipesInPool (input) {
    let poolVolium = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let workerMissingHours = Number(input[3]);

    let for3HoursFirstPipe = debitFirstPipe * workerMissingHours;
    let for3HoursSecondPipe = debitSecondPipe * workerMissingHours;
    let totalfor3HoursBothPipe = for3HoursFirstPipe + for3HoursSecondPipe;

    let poolFullnessFor3Hours = (totalfor3HoursBothPipe / poolVolium) * 100;
    let poolFullnessFor3HoursFirstPipe = ((for3HoursFirstPipe / totalfor3HoursBothPipe) * 100).toFixed(2);
    let poolFullnessFor3HoursSecondPipe = ((for3HoursSecondPipe / totalfor3HoursBothPipe) * 100).toFixed(2);

    let littersOverflow = totalfor3HoursBothPipe - poolVolium;

    if (totalfor3HoursBothPipe > poolVolium) {
        console.log(`For ${workerMissingHours} hours the pool overflows with ${littersOverflow} liters.`);
    } else {
        console.log(`The pool is ${poolFullnessFor3Hours}% full. Pipe 1: ${poolFullnessFor3HoursFirstPipe}%. Pipe 2: ${poolFullnessFor3HoursSecondPipe}%.`);
    }
}

pipesInPool (['100','100','100','2.5'])
