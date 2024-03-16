"use strict";
checkFavoriteFruit("mango");
checkFavoriteFruit("banana");
checkFavoriteFruit("Strawberry");
checkFavoriteFruit("Apple");
function checkFavoriteFruit(fruit) {
    let myFavoriteFruits = ["mango", "banana", "strawberry"];
    if (myFavoriteFruits.includes(fruit.toLowerCase())) {
        console.log("You really like " + fruit + "!");
    }
}
