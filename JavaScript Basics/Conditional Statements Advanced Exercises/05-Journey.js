function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let price = 0;
    let restType = '';

    if (budget <= 100) {
        destination = 'Bulgaria'
        switch (season) {
            case 'summer':
                restType = 'Camp';
                price = budget * 0.3;
                break;
            case 'winter':
                restType = 'Hotel';
                price = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                restType = 'Camp';
                price = budget * 0.4;
                break;
            case 'winter':
                restType = 'Hotel';
                price = budget * 0.8;
                break;
        }
    } else {
        destination = 'Europe';
        restType = 'Hotel';
        price = budget * 0.9;
    }

     console.log(`Somewhere in ${destination}`);
     console.log(`${restType} - ${price.toFixed(2)}`);

    // if (budget <= 100) {
    //     destination = 'Bulgaria';
    //     if (season === 'summer') {
    //         restType = 'Camp';
    //         price = budget * 0.3;
    //     } else if (season === 'winter') {
    //         restType = 'Hotel';
    //         price = budget * 0.7;
    //     }
    // } else if (budget <= 1000) {
    //     destination = 'Balkans'
    //     if (season === 'summer') {
    //         restType = 'Camp';
    //         price = budget * 0.4;
    //     } else if (season === 'winter') {
    //         restType = 'Hotel';
    //         price = budget * 0.8;
    //     } 
    // } else {
    //     destination = 'Europe'
    //     restType = 'Hotel';
    //     price = budget * 0.9;
    // }

    // console.log(`Somewhere in ${destination}`);
    // console.log(`${restType} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"]);