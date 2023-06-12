function oscars(input) {
 
    let actorName = input[0];
    let points = Number(input[1]);
    let jugdesCount = Number(input[2]);
 
    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let additionalPoints = Number(input[i+1]);
        let namePoints = judgeName.length;
 
        points += ((namePoints * additionalPoints) / 2);
 
        if (points > 1250.5) {
            break;
        }
    }
 
    if (points > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let pointsNeeded = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)
    }
}

oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"]);