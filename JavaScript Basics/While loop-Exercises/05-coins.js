function solve(input) {
    let change = Number(input[0]);
    let stotinki = Math.round(change * 100);
    let coinsReturned = 0;

    while (stotinki !== 0) {
        if (stotinki >= 200) {
            coinsReturned++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            coinsReturned++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            coinsReturned++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            coinsReturned++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            coinsReturned++;
            stotinki -= 10;
        } else if (stotinki >= 5) {
            coinsReturned++;
            stotinki -= 5;
        } else if (stotinki >= 2) {
            coinsReturned++;
            stotinki -= 2;
        } else if (stotinki >= 1) {
            coinsReturned++;
            stotinki -= 1;
        }

    }

    console.log(coinsReturned);
}

solve(["2"]);