function basketballEquipment (input) {

    let annualTax = Number(input[0]);

    let trainers = annualTax - (annualTax * 0.4);
    let equipment = trainers - (trainers * 0.2);
    let ball = equipment * 0.25;
    let accessories = ball * 0.2;
    let totalEquipment = trainers + equipment + ball + accessories;

    let totalExpences = annualTax + totalEquipment;

    console.log(totalExpences);

}

basketballEquipment(['365'])

// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
