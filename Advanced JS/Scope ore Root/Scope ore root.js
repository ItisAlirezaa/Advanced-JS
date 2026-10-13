// ROOT Scope
var a = 5;
function one() {
  // Chaild Scope
  var a = 9;
  console.log(a);
}
function tow() {
  var a = 12;
  console.log(a);
}
function three(params) {
  a = 12;
  console.log(a);
}
