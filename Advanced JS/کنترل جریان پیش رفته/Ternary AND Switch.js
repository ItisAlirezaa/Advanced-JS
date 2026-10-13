// Ternary operator = condition ? ezper1 : exper2 ;
function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(false) ? "wellcom" : "Access";
console.log(answer);

// switch
function move(direction) {
  var whathappens;
  switch (direction) {
    case "forward":
      whathappens = "you see a monster";
      break;
    case "back":
      whathappens = "you are home";
      break;
    case "right":
      whathappens = "you see a river";
      break;
    case "left":
      whathappens = "you lose!";
      break;

    default:
      whathappens = "plese enter a Valid";
      break;
  }
  return whathappens;
}
