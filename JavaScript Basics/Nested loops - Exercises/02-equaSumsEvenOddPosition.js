function equaSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let even = 0;
        let odd = 0;

        let curNumAsString = curNum.toString();

        for (let i = 0; i < curNumAsString.length; i++) {
            let curDigit = Number(curNumAsString[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                even += curDigit;
            } else {
                odd += curDigit;
            }
        }

        if (even === odd) {
            result += `${curNum} `;
        }
    }

    console.log(result);
}

equaSumsEvenOddPosition(["100000", "100050"]);