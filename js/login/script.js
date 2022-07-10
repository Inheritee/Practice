/*var array = ["banana", "apples", "oranges", "blueberries"];
array.shift();
array.sort();
array.push("kiwi");
array.splice(0,1);
array.reverse();
console.log(array);

var user = {
    name: "john",
    age: 34,
    hobby: "soccer",
    isMarried: false,
};
console.log(user);
*/

var database = [
    {
        username: "john",
        password: "secret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "JS is cool"
    },
    {
        username: "Eline",
        timeline: "day 3 of learning"
    },
    {
        username: "Mitchel",
        timeline: "JS is VERY cool"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("whats your password?");

signIn(userNamePrompt, passwordPrompt);