"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_14_1 = require("../task_14/task_14");
console.log(task_14_1.guestList[0] + " is not coming to the dinner. I am inviting " + "Ajmal" + " instead.");
task_14_1.guestList[0] = "Ajmal";
task_14_1.guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on the specified date and time.`);
});
