// Destructuring
const obj = {
  player: "Ali",
  exp: 50,
  wizardlevel: true,
};
// const player = obj.player;
// const exp = obj.exp;
// const wizardlevel = obj.wizardlevel;

const { player, exp, wizardlevel } = obj;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Object properties
const a = "ali";
const b = true;
const c = {};
const obj = {
  a,
  b,
  c,
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Template strings
const name = "Ali";
const age = 36;
const pet = "Cat";
// const wellcom = "hi" + name + "your age is" + age + "your pet " + pet ;
const es6 = `hi ${name} yuor age ${age} your pet is ${pet}`;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// default arguments
function greet(name = "", age = 30, pet = "cat") {
  return (es6 = `hi ${name} yuor age ${age} your pet is ${pet}`);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// new whrite function
function sum(a, b) {
  return a + b;
}
const Add = (a, b) => a + b;
