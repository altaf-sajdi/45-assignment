// q 16 
let guests: string[] = ["Ali", "Rashid", "Hussain"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Ahmmad");
guests.splice(guests.length / 3, 0, "Nadir");
guests.push("Ali akbar");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
              

// q17
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // 
