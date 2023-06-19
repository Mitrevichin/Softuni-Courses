function reporting(input) {
    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);
    let result = '';

    for (let i = 2; i <= firstNumLimit; i += 2) {

        for (let j = 2; j <= secondNumLimit; j++) {

            for (let k = 2; k <= thirdNumLimit; k += 2) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                   result += `${i} ${j} ${k} \n`;
                } 
            }
        }
    }

    console.log(`${result}`);

}

reporting(['3', '5', '5']);