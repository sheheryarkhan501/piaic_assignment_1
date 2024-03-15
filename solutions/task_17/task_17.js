"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_14_1 = require("../task_14/task_14");
console.log("Unfortunately, my new dinner table won't arrive in time, and I can only invite two guests.");
while (task_14_1.guestList.length > 2) {
    let removedGuest = task_14_1.guestList.pop();
    console.log(`I'm sorry, ${removedGuest}, I can't invite you to dinner.`);
}
task_14_1.guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner. I look forward to it.`);
});
// Clearing the list
task_14_1.guestList.splice(0, task_14_1.guestList.length);
console.log("Final guest list:", task_14_1.guestList);
