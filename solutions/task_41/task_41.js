"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicians = void 0;
/*
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
exports.magicians = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Dynamo'];
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
show_magicians(exports.magicians);
