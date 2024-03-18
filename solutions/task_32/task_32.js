"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUsernames = exports.new_users = exports.current_users = void 0;
exports.current_users = ["admin", "User1", "User2", "User3", "User4", "user5"];
exports.new_users = ["user5", "User7", "user4", "user9", "user10"];
function checkUsernames(currentUsers, newUsers) {
    // Loop through the new_users list.
    newUsers.forEach(newUser => {
        // Convert the newUser to lower case and check against the lower-cased current users.
        const isTaken = currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
        // Print message based on whether the username is already taken.
        if (isTaken) {
            console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`The username "${newUser}" is available.`);
        }
    });
}
exports.checkUsernames = checkUsernames;
checkUsernames(exports.current_users, exports.new_users);
