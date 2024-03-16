"use strict";
let importedUsers = ["admin", "user1", "user2", "user3", "user4", "user5"];
let importedUsersLength = importedUsers.length;
for (let i = 0; i < importedUsersLength; i++) {
    importedUsers.pop();
    console.log(importedUsers);
}
if (importedUsers.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("We have some users!" + importedUsers.length);
}
