"use strict";
let alienColor3 = "red";
checkAlienColorNested(alienColor3);
function checkAlienColorNested(alien) {
    if (alien === "green") {
        console.log("You have earned 5 points!");
    }
    else if (alien === "yellow") {
        console.log("You have earned 10 points!");
    }
    else if (alien === "red") {
        console.log("You have earned 15 points!");
    }
    else {
        console.log("");
    }
}
