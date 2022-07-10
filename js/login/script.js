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
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("whats your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);