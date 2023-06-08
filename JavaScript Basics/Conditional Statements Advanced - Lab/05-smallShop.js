function smallShop (input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    if (town === 'Sofia') {
        if (product === 'coffee') {
            console.log(quantity * 0.50.toFixed(2));
        }
        if (product === 'water') {
            console.log(quantity * 0.80.toFixed(2));
        }
        if (product === 'beer') {
            console.log(quantity * 1.20.toFixed(2));
        }
        if (product === 'sweets') {
            console.log(quantity * 1.45.toFixed(2));
        }
        if (product === 'peanuts') {
            console.log(quantity * 1.60.toFixed(2));
        }
    } else if (town === 'Plovdiv') {
        if (product === 'coffee') {
            console.log(quantity * 0.40.toFixed(2));
        }
        if (product === 'water') {
            console.log(quantity * 0.70.toFixed(2));
        }
        if (product === 'beer') {
            console.log(quantity * 1.15.toFixed(2));
        }
        if (product === 'sweets') {
            console.log(quantity * 1.30.toFixed(2));
        }
        if (product === 'peanuts') {
            console.log(quantity * 1.50.toFixed(2));
        }
    } else if (town === 'Varna') {
        if (product === 'coffee') {
            console.log(quantity * 0.45.toFixed(2));
        }
        if (product === 'water') {
            console.log(quantity * 0.70.toFixed(2));
        }
        if (product === 'beer') {
            console.log(quantity * 1.10.toFixed(2));
        }
        if (product === 'sweets') {
            console.log(quantity * 1.35.toFixed(2));
        }
        if (product === 'peanuts') {
            console.log(quantity * 1.55.toFixed(2));
        }
    }
}
    // let finalSum = 0;

//     if (town === 'Sofia') {

//         switch (product) {
//             case 'coffee': finalSum = quantity * 0.50;
//                 break;
//             case 'water': finalSum = quantity * 0.80;
//                 break;
//             case 'beer': finalSum = quantity * 1.20;
//                 break;
//             case 'sweets': finalSum = quantity * 1.45;
//                 break;
//             case 'peanuts': finalSum = quantity * 1.60;
//                 break;
//         }

//     } else if (town === 'Plovdiv') {

//         switch (product) {
//             case 'coffee': finalSum = quantity * 0.40;
//                 break;
//             case 'water': finalSum = quantity * 0.70;
//                 break;
//             case 'beer': finalSum = quantity * 1.15;
//                 break;
//             case 'sweets': finalSum = quantity * 1.30;
//                 break;
//             case 'peanuts': finalSum = quantity * 1.50;
//                 break;
//         }

//     } else if (town === 'Varna') {

//         switch (product) {
//             case 'coffee': finalSum = quantity * 0.45;
//                 break;
//             case 'water': finalSum = quantity * 0.70;
//                 break;
//             case 'beer': finalSum = quantity * 1.10;
//                 break;
//             case 'sweets': finalSum = quantity * 1.35;
//                 break;
//             case 'peanuts': finalSum = quantity * 1.55;
//                 break;
//         }

//     }

//     console.log(finalSum);
// }

smallShop (["sweets", "Sofia", "2.23"])