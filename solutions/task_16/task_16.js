"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_14_1 = require("../task_14/task_14");
console.log("I found a bigger dinner table!");
// Adding more guests
task_14_1.guestList.unshift("Kamal");
task_14_1.guestList.splice(2, 0, "Jamal");
task_14_1.guestList.push("Sultan");
task_14_1.guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be thrilled if you could join me for dinner.`);
});
