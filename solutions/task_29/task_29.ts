checkFavoriteFruit("mango");
checkFavoriteFruit("banana");
checkFavoriteFruit("Strawberry");
checkFavoriteFruit("Apple");

function checkFavoriteFruit (fruit: string): void {
    let myFavoriteFruits: string[] = ["mango", "banana", "strawberry"];

    if(myFavoriteFruits.includes(fruit.toLowerCase())){
        console.log("You really like " + fruit + "!");
    } 
}