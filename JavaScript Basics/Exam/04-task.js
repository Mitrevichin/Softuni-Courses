function exam(input) {
    let studentsCount = Number(input[0]);

    let topStudents = 0;
    let between4And499 = 0;
    let between3And399 = 0;
    let lessThan3 = 0;

    let sumGrades = 0;

    for (let i = 1; i < input.length; i++) {
        let curGrade = Number(input[i]);
        sumGrades += curGrade;

        if (curGrade >= 5) {
            topStudents++;
        } else if (curGrade >= 4 && curGrade <= 4.99) {
            between4And499++;
        } else if (curGrade >= 3 && curGrade <= 3.99) {
            between3And399++;
        } else {
            lessThan3++;
        }
    }

    let avgGrade = sumGrades / studentsCount;

    console.log(`Top students: ${((topStudents / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4And499 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3And399 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((lessThan3 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);

}

exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);
