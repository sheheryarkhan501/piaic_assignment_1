
import { guestList } from '../task_14/task_14';

console.log("Unfortunately, my new dinner table won't arrive in time, and I can only invite two guests.");

while (guestList.length > 2) {
  let removedGuest: string = guestList.pop()!;
  console.log(`I'm sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach(guest => {
  console.log(`Dear ${guest}, you're still invited to dinner. I look forward to it.`);
});

// Clearing the list
guestList.splice(0, guestList.length);

console.log("Final guest list:", guestList);
