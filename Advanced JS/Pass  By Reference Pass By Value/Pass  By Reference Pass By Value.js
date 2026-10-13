// By Value
var a = 5;
var b = a;
b++;
// By Reference
let obj1 = { name: "Ali ", password: "1234" };
let onj2 = obj1;
obj2.password = "123456";
console.log(obj1);
console.log(obj2);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
var c = [1, 2, 3, 4, 5, 6];
var d = c;
d.push(24567);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
var c = [1, 2, 3, 4, 5, 6];
var d = [].concat(c);
d.push(24567);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
let obj = { a: "a", b: "b", c: { deep: "try to cop me" } };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
clone.a = "j";

let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep = "third try";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
