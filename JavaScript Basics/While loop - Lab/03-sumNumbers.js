function sumNumbers(input) {
    
    let firstNumber = Number(input[0]);
    let sumNumbers = 0;
    let i = 1;
    let currNumber = Number(input[i]);

    while (sumNumbers < firstNumber) {
        sumNumbers += currNumber;
        i++;
        currNumber = Number(input[i]);
    }

    console.log(`${sumNumbers}`);

    // let firstNumber = Number(input[0]);
    // let sumNumbers = 0;

    // for (let i = 1; i < input.length; i++) {
    //     let currNumber = Number(input[i]);
    //     if (sumNumbers < firstNumber) {
    //         sumNumbers += currNumber
    //     }
    // }

    // console.log(`${sumNumbers}`);

}

sumNumbers(["100", "10", "20", "30", "40"]);