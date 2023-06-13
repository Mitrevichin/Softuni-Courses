function readText(input) {

    for (let i = 0; i < input.length; i++) {

        let word = input[i];

        if (word !== "Stop") {
            console.log(`${word}`);
        } else {
            break;
        }

    }
    // let i = 0;
    // let word = input[i];


    // while (i < input.length) {
    //     if (word === "Stop") {
    //         break;
    //     }

    //     console.log(`${word}`);
    //     i++;
    //     word = input[i];
    // }
}

readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);