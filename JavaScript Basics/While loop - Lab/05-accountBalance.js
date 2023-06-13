function accountBalance(input) {

    let totalMoney = 0;
    let i = 0;
    let installment = input[i];

    while (installment !== 'NoMoreMoney') {
        let asNumber = Number(installment);

        if (asNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        totalMoney += asNumber;
        console.log(`Increase: ${asNumber.toFixed(2)}`);
        
        i++;
        installment = input[i];
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);