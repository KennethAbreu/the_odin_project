let people = ["Gob", "Buster", "Lucille", "Michael", "Lindsay", "Tobias", "George-Michael", "Maeby"];
let guestList = [];
let refusedEntry = [];

for (i = 0; i < people.length; i++) {
    if (people[i] === "George-Michael" || people[i] === "Maeby") {
        console.log(`Sorry ${people[i]}, no kids allowed.`);
        refusedEntry.push(people[i]);
    }
    else {
        console.log(`Welcome to the party ${people[i]}!`);
        guestList.push(people[i]);
    }
}
addElement();