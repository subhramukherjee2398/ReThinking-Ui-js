//Q1 :

function test(...arges) {
  // [10]

  console.log(typeof arges); // object
}

test(10);

//Q2 :

let Emp = {
  name: "XYZ",
};

var E = Object.create(Emp);

console.log(E.name); // "XYZ"

delete E.name; // as name property is inherit from Emp; E cannot delete it

console.log(E.name); // "XYZ"

console.log(E.hasOwnProperty("name")); // false

//Q3 :

var obj = {
  f: "boo",
  func: function () {
    var self = this;

    console.log("1", this.f); // boo
    console.log(
      "2",
      self.f
    )(
      // boo

      (function () {
        console.log("3", this.f); // undefined (global object)
        console.log("2", self.foo); // boo (because self has this and this referes to the obj object)
      })()
    );
  },
};


