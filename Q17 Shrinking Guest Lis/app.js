// q 16 
var guests = ["Ali", "Rashid", "Hussain"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Ahmmad");
guests.splice(guests.length / 3, 0, "Nadir");
guests.push("Ali akbar");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// q17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // 
