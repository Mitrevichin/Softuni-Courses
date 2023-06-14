function moving(input) {
    // let i = 0;

    // let width = Number(input[i]);
    // i++;

    // let length = Number(input[i]);
    // i++;

    // let height = Number(input[i]);
    // i++;

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let i = 3;

    let totalBoxes = width * length * height;

    let currboxes = input[i];
    i++;

    while (currboxes !== 'Done') {
        currboxes = Number(currboxes);
        totalBoxes -= currboxes;

        if (totalBoxes <= 0) {
            break;
        }

        currboxes = input[i];
        i++;

    }


    if (currboxes === 'Done') {
        console.log(`${totalBoxes} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(totalBoxes)} Cubic meters more.`);
    }

}

moving(["10",

"1",

"2",

"4",

"6",

"Done"]);