function oldBooks(input) {

    let wantedBook = input[0];
    let index = 1;
    let currBook = input[index];
    index++;

    // let index = 0;
    // let wantedBook = input[index];
    // index++;

    // let currBook = input[index];
    // index++;

    let bookCount = 0;
    let isFound = false;

    while (currBook !== "No More Books") {
        if (currBook === wantedBook) {
            isFound = true;
            break;
        }

        bookCount++;
        currBook = input[index];
        index++;
    }

    if (isFound) {
        console.log(`You checked ${bookCount} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);
    }
}

oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])
    ;