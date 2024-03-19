/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

export let magicians: string[] = ['David Copperfield', 'David Blaine', 'Harry Houdini', 'Dynamo'];

export function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `The Great ${magician}`);
}

export function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

show_magicians(make_great(magicians));


