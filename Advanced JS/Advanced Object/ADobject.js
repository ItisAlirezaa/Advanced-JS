// refrenc type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// context vs Scope
const object4 = {
  a: function () {
    console.log(this);
  },
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// instantiation
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi may name is ${this.name} i am a${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  Play() {
    (console, log("weeeeeeeee"));
  }
}
const wizard1 = new Wizard("Ali", "healer");
const wizard2 = new Wizard("reza", "magic");
