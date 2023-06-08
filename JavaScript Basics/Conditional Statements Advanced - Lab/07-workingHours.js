function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case 'Monday': console.log('open'); break;
            case 'Tuesday': console.log('open'); break;
            case 'Wendsday': console.log('open'); break;
            case 'Thursday': console.log('open'); break;
            case 'Friday': console.log('open'); break;
            case 'Saturday': console.log('open'); break;
            default:
                console.log('closed');
                break;
        }
    } 

}

workingHours(["11", "Sunday"])