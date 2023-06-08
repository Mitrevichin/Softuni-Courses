function fruitOrVegetable (input) {
    let product = input[0];

    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}
//     if (product === 'banana' || product === 'apple' || product === 'kiwi' || product === 'cherry' || product === 'lemon' || product === 'grapes') {
//         console.log('fruit');
//     } else if (product === 'tomato' || product === 'cucumber' || product === 'pepper' || product === 'carrot') {
//         console.log('vegetable');
//     } else {
//         console.log('unknown');
//     }

// }

fruitOrVegetable (['apple'])