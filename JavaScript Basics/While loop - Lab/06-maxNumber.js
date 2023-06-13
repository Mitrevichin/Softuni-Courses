function solve(input) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let i = 0;
    let element = input[i];

    while (element !== 'Stop') {
        let elementAsNumber = Number(element);

        if (elementAsNumber > maxNumber) {
            maxNumber = elementAsNumber;
        }

        i++;
        element = input[i];
    }

    console.log(maxNumber);
}

solve(["100",
    "99",
    "80",
    "70",
    "Stop"]);