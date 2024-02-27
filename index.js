"use strict";
// No users 
Object.defineProperty(exports, "__esModule", { value: true });
// Empty arrey case
let userNames = ['admin', 'Kamran Khan Tessori', 'Daniyal Nagori', 'Zia Khan', 'Muhammad Amin', 'Muhammad Ali'];
// Functional case
function greetUser(userNames) {
    if (userNames.length === 0) {
        console.log(`We need to find some users!`);
        return;
    }
    for (const username of userNames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report`);
        }
        else {
            console.log(`Hello $(userName), thank you for loging in again.`);
        }
    }
}
console.log(`For non empty username:\n`);
greetUser(userNames);
// to make arrey empty we just assign an empty array to use the userName 
userNames = [];
console.log(`\n\n For empty username:\n`);
greetUser(userNames);
