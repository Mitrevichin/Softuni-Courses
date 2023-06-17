function building(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let a = x; a > 0; a--) {

        let printLine = '';

        for (let b = 0; b < y; b++) {
            if (a === x) {
                printLine += `L${a}${b} `;
            } else if (a % 2 === 0) {
                printLine += `O${a}${b} `;
            } else {
                printLine += `A${a}${b} `;
            }
        }

        console.log(printLine);
    }

}

building(["6","4"]);