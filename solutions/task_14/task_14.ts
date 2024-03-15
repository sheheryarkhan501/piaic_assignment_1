export let guestList: string[] = ['Ali', 'Ahmed', 'Hassan'];

guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on the specified date and time.`);
});

