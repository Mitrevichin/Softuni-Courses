function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let finalInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let isFound = false;

    for (let a = startInterval; a <= finalInterval; a++) {
        for (let b = startInterval; b <= finalInterval; b++) {
            let sum = a + b;
            combinations++;
            if (sum === magicNumber) {
                console.log(`Combination N:${combinations} (${a} + ${b} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);