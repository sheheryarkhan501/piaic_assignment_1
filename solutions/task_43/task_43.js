"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const task_42_1 = require("../task_42/task_42");
let great_magicians = (0, task_42_1.make_great)(task_42_1.magicians);
(0, task_42_1.show_magicians)(task_42_1.magicians);
(0, task_42_1.show_magicians)(great_magicians);
