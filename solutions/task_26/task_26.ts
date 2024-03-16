let alienColor2 = "red";

checkAlienColor(alienColor2);

function checkAlienColor (alien: string): void {
  if(alien === "green") {
    console.log("You have earned 5 points!");
  } else {
    console.log("You have earned 10 points!");
  }
}