"use strict";
task_28(1);
task_28(3);
task_28(5);
task_28(15);
task_28(25);
task_28(65);
function task_28(age) {
    if (age < 2) {
        console.log(age + " is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log(age + " is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log(age + " is a child");
    }
    else if (age >= 13 && age < 20) {
        console.log(age + " is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log(age + " is an adult");
    }
    else {
        console.log(age + " is an elder");
    }
}
