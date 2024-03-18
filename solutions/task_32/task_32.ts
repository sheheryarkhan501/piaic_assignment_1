
export let current_users: string[] = ["admin", "User1", "User2", "User3", "User4", "user5"];
export let new_users: string[] = ["user5", "User7", "user4", "user9", "user10"];

export function checkUsernames(currentUsers: string[], newUsers: string[]) {
    // Loop through the new_users list.
    newUsers.forEach(newUser => {
        // Convert the newUser to lower case and check against the lower-cased current users.
        const isTaken = currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());

        // Print message based on whether the username is already taken.
        if (isTaken) {
            console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
        } else {
            console.log(`The username "${newUser}" is available.`);
        }
    });
}

checkUsernames(current_users, new_users);