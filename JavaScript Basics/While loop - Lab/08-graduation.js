function graduation(input) {

    let name = input[0];
    let i = 1;
    let currGrade = Number(input[i]);
    let excluded = 0;
    let sumGrades = 0;

    while (i < input.length) {
        if (currGrade < 4) {
            excluded++;
        }

        if (excluded >= 2) {
            console.log(`${name} has been excluded at ${i - 1} grade`);
            break;
        }

        sumGrades += currGrade;
        i++;
        currGrade = Number(input[i]);
    }

    
    avgGrade = sumGrades / 12;
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
    
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);