"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = exports.make_great = exports.magicians = void 0;
exports.magicians = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Dynamo'];
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
exports.make_great = make_great;
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
exports.show_magicians = show_magicians;
show_magicians(make_great(exports.magicians));
