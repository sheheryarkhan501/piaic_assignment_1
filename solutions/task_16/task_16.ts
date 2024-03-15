
import { guestList } from '../task_14/task_14';

console.log("I found a bigger dinner table!");

// Adding more guests
guestList.unshift("Kamal");
guestList.splice(2, 0, "Jamal");
guestList.push("Sultan");

guestList.forEach(guest => {
  console.log(`Dear ${guest}, I would be thrilled if you could join me for dinner.`);
});
