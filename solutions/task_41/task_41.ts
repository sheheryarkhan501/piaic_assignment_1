/*
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
export let magicians: string[] = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Dynamo'];

function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

show_magicians(magicians);
