function fishTank (input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let percentDecimal = percent / 100;

    let vol = length * width * height;
    let volLiters = vol / 1000;
    neccessaryLiters = volLiters * (1-percentDecimal);

    console.log(neccessaryLiters);

}

fishTank(["85","75","47","17"])


