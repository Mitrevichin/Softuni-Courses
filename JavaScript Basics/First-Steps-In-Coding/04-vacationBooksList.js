function vacationBooks(input) {

    let pagesQty = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysQty = Number(input[2]);

    let totalTime = pagesQty / pagesPerHour;
    let necessaryDays = totalTime / daysQty;

    console.log(necessaryDays);

}

vacationBooks(['212', '20', '2'])