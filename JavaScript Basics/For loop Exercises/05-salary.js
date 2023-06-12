function salary(input) {
    let openTabs = Number(input[0]);
    let salaryAmount = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let website = input[i];

        if (website === 'Facebook') {
            salaryAmount -= 150;
        } else if (website === 'Instagram') {
            salaryAmount -= 100;
        } else if (website === 'Reddit') {
            salaryAmount -=50;
        }

        if (salaryAmount <= 0) {
            break;
        }

    }

    if (salaryAmount <= 0) {
      console.log("You have lost your salary.");
    } else {
        console.log(`${salaryAmount}`);
    }

}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);