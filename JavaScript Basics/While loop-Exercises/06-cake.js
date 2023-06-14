function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let piecesCount = width * length;

    let index = 2;

    let piecesTaken = input[index];
    index++;

    while (piecesTaken !== 'STOP') {
        piecesTaken = Number(piecesTaken);
        piecesCount -= piecesTaken;

        if (piecesCount <= 0) {
            break;
        }

        piecesTaken = input[index];
        index++;

    }

    if (piecesTaken === 'STOP') {
        console.log(`${piecesCount} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
    }

}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"]);
