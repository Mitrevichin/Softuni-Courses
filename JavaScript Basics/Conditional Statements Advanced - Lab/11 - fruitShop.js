function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantuty = input[2];
    let price = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === "Friday") {
        switch (product) {
            case 'banana': console.log(price = (quantuty * 2.50).toFixed(2)); break;
            case 'apple': console.log(price = (quantuty * 1.20).toFixed(2)); break;
            case 'orange': console.log(price = (quantuty * 0.85).toFixed(2)); break;
            case 'grapefruit': console.log(price = (quantuty * 1.45).toFixed(2)); break;
            case 'kiwi': console.log(price = (quantuty * 2.70).toFixed(2)); break;
            case 'pineapple': console.log(price = (quantuty * 5.50).toFixed(2)); break;
            case 'grapes': console.log(price = (quantuty * 3.85).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (day === "Saturday" || day === 'Sunday') {
        switch (product) {
            case 'banana': console.log(price = (quantuty * 2.70).toFixed(2)); break;
            case 'apple': console.log(price = (quantuty * 1.25).toFixed(2)); break;
            case 'orange': console.log(price = (quantuty * 0.90).toFixed(2)); break;
            case 'grapefruit': console.log(price = (quantuty * 1.60).toFixed(2)); break;
            case 'kiwi': console.log(price = (quantuty * 3.00).toFixed(2)); break;
            case 'pineapple': console.log(price = (quantuty * 5.6).toFixed(2)); break;
            case 'grapes': console.log(price = (quantuty * 4.20).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error');
    }

}

fruitShop(["apple",

"Tuesday",

"2"])