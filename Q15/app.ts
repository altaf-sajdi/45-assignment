// 14  qoustion

let guests: string[] = ["Altaf", "Kashif", "Sajid"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unable = "altaf";
console.log(`${unable} can't make it to dinner.`);

// Replace
let newg = "ali";
guests[guests.indexOf(unable)] = newg;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
              