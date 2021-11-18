function addPerson(array) {
    //create new p element
    const newPara = document.createElement("p");

    //give p element some content
    const fillGuest = document.createTextNode(array);

    //add text node to newly created p element
    newPara.appendChild(fillGuest);

    //add newly created p element and its contents to DOM
    const body = document.getElementById(null); //setting getElementById to null or leaving empty just adds right to body of html
    document.body.insertBefore(newPara, body);
}

let people = ["Gob", "Buster", "Lucille", "Michael", "Lindsay", "Tobias", "George-Michael", "Maeby"];
let guestList = [];
let refusedEntry = [];

for (i = 0; i < people.length; i++) {
    if (people[i] === "George-Michael" || people[i] === "Maeby") {
        addPerson(`Sorry ${people[i]}, no kids allowed.`);
        refusedEntry.push(people[i]);
    }
    else {
        addPerson(`Welcome to the party ${people[i]}!`);
        guestList.push(people[i]);
    }
}
