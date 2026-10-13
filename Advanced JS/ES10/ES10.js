const array = [1, [2, 3, 4], 5, [6, [7]]];
array.flat(4);

const entries = ["bob", "sally", , , , , , , , , , "cidy"];
entries.flat();

const park = [["dog", "monky"], ["gurilla"], ["duck", "lizard"]];
const wildPark = park.flatMap((animal) => animal + " ,T_rex");

let UserEmail = "                alireza.farhangg84@gmail.com";
let UserEmail2 = "ali@gmail.com                               ";
console.log(UserEmail.trimStart());
console.log(UserEmail2.trimEnd());

let UserProfil = [
  ["pedram", 20],
  ["ali", 18],
  ["sally", 24],
];

Object.fromEntrise(UserProfil);
try {
  bob + "hi";
} catch (err) {
  console.log("this is wrong" + err);
}
