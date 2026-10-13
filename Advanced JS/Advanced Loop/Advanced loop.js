const basket = ["appels", "oranges", "grapes"];
const datailedBasket = {
  appels: 5,
  oranges: 10,
  grapes: 1000,
};

// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
// 2
basket.forEach((item) => {
  console.log(item);
});
// for of iterating
for (item of basket) {
  console.log(item);
}
// for in enumerating
for (item in datailedBasket) {
  console.log(item);
}
