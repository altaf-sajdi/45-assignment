
let guests: string[] = ["Ali", "Rashid", "Hussain"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Ahmmad");
guests.splice(guests.length / 3, 0, "Nadir");
guests.push("Ali akbar");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
              