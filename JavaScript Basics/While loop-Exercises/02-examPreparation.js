function examPreparation(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let badGradesCounter = 0;
    let problemCounter = 0;
    let gradeSum = 0;
    let lastProblem = '';
    let maxBadGradesReached = false;

    while (problemName !== "Enough") {
        lastProblem = problemName;

        if (problemGrade <= 4) {
            badGradesCounter++;
        }

        if (badGradesCounter === maxBadGrades) {
            maxBadGradesReached = true;
            break;
        }

        gradeSum += problemGrade;
        problemCounter++;

        problemName = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;
    }

    if (maxBadGradesReached) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        let avgGrade = gradeSum / problemCounter;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring",
    "Time",
    "5",
    "Bus",
    "6",
    "Enough"]);