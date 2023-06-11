function cinema (input) {
    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    
    let totalProfit = rows * cols;

    if (filmType === 'Premiere') {
        totalProfit *= 12;
    } else if (filmType === 'Normal') {
        totalProfit *= 7.50;
    } else if (filmType === 'Discount') {
        totalProfit *= 5.00;
    }

    console.log(`${totalProfit.toFixed(2)} leva`);
}

cinema (["Normal", "21", "13"]);