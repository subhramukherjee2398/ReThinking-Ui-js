//q1 :

(function () {
  var a = (b = 5);
})();

//console.log(a) // error
console.log(b); // 5

// answer : var has a function scope so it was IFFE function and it's close itself.outside that function var will not found so undefined
// but b is not declare with var so it has the window scope; b value will be 5 ( will be undefind if we use 'strict' )

//q2 : create native string method and make the solution

// solution :

String.prototype.repeatify =
  String.prototype.repeatify ||
  function (times) {
    let str = " ";
    for (let i = 0; i < times; i++) {
      str += this;
    }
    return str;
  };

console.log("hello".repeatify(3)); //hellohellohello

//q3 :

var name = "AAA";

let obj = {
  name: "BBB",
  prop: {
    name: "CCC",
    getName: function () {
      return this.name;
    },
  },
};

console.log(obj.prop.getName()); /// CCC

var test = obj.prop.getName;

console.log(test()); /// AAA

// because we are initialize it var..so it is implicitly set as a property of a global object

console.log(test.call(obj.prop)); /// CCC ( now we are binding with the obj.props)
console.log(test.call(obj)); ///BBB
