function histocram (input) {
    let n = Number(input[0]);

    let section1 = 0;
    let section2 = 0;
    let section3 = 0;
    let section4 = 0;
    let section5 = 0;

    for (let i = 1; i <= n; i++) {

        let number = Number(input[i]);

        if (number < 200) {
            section1++;
        } else if (number < 400) {
            section2++;
        } else if (number < 600) {
            section3++;
        } else if (number < 800) {
            section4++;
        } else {
            section5++;
        }
    }

    let p1 = (section1 / n) * 100;
    let p2 = (section2 / n) * 100;
    let p3 = (section3 / n) * 100;
    let p4 = (section4 / n) * 100;
    let p5 = (section5 / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histocram(["7", "800", "801", "250", "199", "399", "599", "799"]);