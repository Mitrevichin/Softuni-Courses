
function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterest = Number(input[2]);
    
    let annualInterestDesimal = annualInterest / 100;

    let totalSum = depositSum + depositPeriod * ((depositSum*annualInterestDesimal) / 12);

    console.log(totalSum);

}

depositCalculator(["200","3","5.7"])