function travelling(input) {
    let index = 0;

    let row = input[index];
    
    while (row !== 'End') {
        let destination = row;

        index++;

        let neededBudget = Number(input[index]);
        let moneySaved = 0;

        while (moneySaved < neededBudget) {
            index++;

            let curSum = Number(input[index]);
            moneySaved += curSum;
        }

        console.log(`Going to ${destination}!`);

        index++;
        row = input[index];

    }

}

travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);