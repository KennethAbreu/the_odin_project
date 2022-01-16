//https://javascript.info/object

//Write the function isEmpty(obj) 
//which returns true if the object has no properties, false otherwise.


let user = {
    name: 'Ken',
};

function isEmpty(obj) {
    for (let key in obj) {
        //if the loop has started, there are properties in the obj
        return false;
    }
    return true;
}

//Write a funciton to sum all salaries and store the value in Sum. 
//Function returns 0 if there are no keys in object

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
function teamSalary(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}


//Create a function multiplyNumeric(obj) 
//that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
    console.log(obj);
}
multiplyNumeric(menu);