// Advanced Array
var array = [1, 2, 10, 16];
const duble = [];
const newArray = array.forEach((num) => {
  duble.push(num * 2);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// map
const mapArray = array.map((num) => {
  return num * 2;
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter
const filterArray = array.filter((num) => {
  return num > 2;
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// reduce
const reduceArray = array.reduce((accumulater, num) => {
  return accumulater + num;
});
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//yek araye ba estefade az forEach benevisid ke be entehaye hame username ha yek ! ezafe karde va dar araye jadid save konad
let newArray = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});
console.log(newArray);

//ba estefade az map in kar ra bokind va be entehaye username ha yek ? ezafe konid
const mapArray = array.map((user) => {
  let { username } = user;
  return username + "?";
});
console.log(mapArray);

//ba estefade az filter faghat user haii ra ke dar team red hastand ra moshkas konid
const filterArray = array.filter((user) => {
  return user.team === "red";
});
console.log(filterArray);

//majmoooee score ha ra ba estefade az reduce peyda konid
const total = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(total);

// (1), meghdar i chist?? INDEX of the array.
// (2), map function zir ra khales va pure konid:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});
