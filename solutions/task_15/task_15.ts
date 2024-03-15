import { guestList } from "../task_14/task_14";

console.log(guestList[0] + " is not coming to the dinner. I am inviting " + "Ajmal" + " instead.");

guestList[0] = "Ajmal";

guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on the specified date and time.`);
});