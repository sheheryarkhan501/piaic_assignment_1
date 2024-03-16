
let alienColor = "green";

checkAlien(alienColor);

function checkAlien (alien: string): void {
  if(alien === "green") {
    console.log("You have earned 5 points!");
  } else {
    console.log("");
  }
}