function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== 'Finish') {
        let movieName = command;
        let freePlacesPerMovie = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let takenPlaces = 0;

        while (command1 !== 'End') {
            let ticketType = command1;
            takenPlaces++;

            if (ticketType === 'student') {
                studentTickets++;
            } else if (ticketType === 'standard') {
                standardTickets++;
            } else {
                kidTickets++;
            }

            if (takenPlaces === freePlacesPerMovie) {
                break;
            }

            command1 = input[index];
            index++;
           
        }
        let percentTaken = (takenPlaces / freePlacesPerMovie) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    
    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);