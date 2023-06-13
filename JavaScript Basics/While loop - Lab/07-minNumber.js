function solve(input) {

    let minNumber = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let element = input[i];

    while (element !== 'Stop') {
        let elementAsNumber = Number(element);

        if (elementAsNumber < minNumber) {
            minNumber = elementAsNumber;
        }

        i++;
        element = input[i];
    }

    console.log(minNumber);
}

solve(["100",
"99",
"80",
"70",
"Stop"]);