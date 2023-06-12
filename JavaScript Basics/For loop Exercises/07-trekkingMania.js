function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    let totalPeople = 0;

    for (let i = 1; i < input.length; i++) {

        let peopleForGroup = Number(input[i]);
        totalPeople += Number(input[i]);

        if  (peopleForGroup <= 5) {
            group1 += peopleForGroup;
        } else if  (peopleForGroup <= 12) {
            group2 += peopleForGroup;
        } else if  (peopleForGroup <= 25) {
            group3 += peopleForGroup;
        } else if  (peopleForGroup <= 40) {
            group4 += peopleForGroup;
        } else {
            group5 += peopleForGroup;
        }
    }

    let p1 = (group1 / totalPeople) * 100;
    let p2 = (group2 / totalPeople) * 100;
    let p3 = (group3 / totalPeople) * 100;
    let p4 = (group4 / totalPeople) * 100;
    let p5 = (group5 / totalPeople) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

trekkingMania
(["10",
"10",
"5",
"1",
"100",
"12",
"26", 
"17", 
"37",
"40",
"78"]);