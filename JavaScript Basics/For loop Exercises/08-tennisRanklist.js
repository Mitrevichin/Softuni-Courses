function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let pointsWon = 0;
    let winsCount = 0;

    for (let i = 2; i < tournamentsCount + 2; i++) {
        let rank = input[i];

        if (rank === 'W') {
            pointsWon += 2000;
            winsCount++;
        } else if (rank === 'F') {
            pointsWon += 1200;
        } else if (rank === 'SF') {
            pointsWon += 720;
        }
    }

    let finalPoints = initialPoints + pointsWon;
    let averagePoints = pointsWon / tournamentsCount;
    let percent = (winsCount / tournamentsCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percent.toFixed(2)}%`);

}

tennisRanklist
(["4",

"750",

"SF",

"W",

"SF",

"W"]);