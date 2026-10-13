// Closures
const first = () => {
  const greet = "hi";
  const seccond = () => {
    alert(greet);
  };
  return seccond;
};
const newfunction = first();
newfunction();
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Currying
const multiply = (a, b) => a * b;
const curriedmultiply = (a) => (b) => a * b;
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (Number) => Number + 1;
compose(sum, sum)(5);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//masaele zir ra hal konid

//#1 tabeeii yek khati benevisid ke 2 adad ra ba ham jaam konad
const sum = (a, b) => a + b;

//Closure: akharin khat che chizi ra return mikonad?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3); // returns 13

//Currying: akharin khat che chizi ra return mikonad?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // 31

//Currying: akharin khat che chizi ra return mikonad?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); // 17

//Composing: akharin khat che chizi ra return mikonad?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); // 16
