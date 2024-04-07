// let guestslist: string[]=["Taha","Maria","Asad"];
// for(let i=0; i< guestslist.length;i++){
//     console.log("Hello "+guestslist[i]+";"+" \nI invite you for a dinner party tomorrow.\n Sincerely Hassham Ahmed.");
// }
// console.log(guestslist[2]+" Unfortunatelly you are not invite for tomorrow dinner");
// guestslist[2]="Ahmed";

// Inform people about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestslist.unshift("Kamran");

// Add one new guest to the middle of the array
guestslist.splice(Math.floor(guestslist.length / 2), 0, "Khurram");

// Use append() to add one new guest to the end of the list
guestslist.push("Salman");

console.log("--------Again Invitition--------");
for(let i=0; i< guestslist.length;i++){
    console.log("Dear "+guestslist[i]+",\n'I would like to invite you to dinner. It would be an honor to have your presence.' \nSincerely, Hassham Ahmed");
}
// Inform people that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestslist.length > 2) {
    let removedGuest: string = guestslist.pop()!;
    console.log(`${removedGuest}, I'm sorry, but I can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list
console.log(`Dear ${guestslist[0]},\nYou're still invited to dinner.\nSincerely, Hassham`);
console.log(`Dear ${guestslist[1]},\nYou're still invited to dinner.\nSincerely, Hassham`);

// Remove the last two names from the list
guestslist.pop();
guestslist.pop();

// Print the final state of the list
console.log("\nFinal guest list:", guestslist);