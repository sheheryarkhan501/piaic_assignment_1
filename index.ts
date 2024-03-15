
let cleanestCity: string[] = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let cityToCheck: string = "Lahor";
let matchFound: boolean = false;

for (let i = 0; i < cleanestCity.length; i++) {
    if (cleanestCity[i] === cityToCheck) {
        console.log(cityToCheck + " one of the cleanest city");
        matchFound = true;
        break;
    }
}

if (matchFound === false) {
    console.log(cityToCheck + " is not one of the cleanest city");
}