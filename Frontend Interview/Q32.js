//Calculate add multiple subtract divide Chaining function
// Q : calculate.add(5).multiple(5).subtract(3).divide(11).value() => 2 ( solve it)

class Calculate {
  constructor(initial = 0) {
    this.initial = initial;
  }

  add(value) {
    this.initial = this.initial + value;
    return this;
  }
  multiple(value) {
    this.initial = this.initial * value;
    return this;
  }
  subtract(value) {
    this.initial = this.initial - value;
    return this;
  }
  divide(value) {
    this.initial = this.initial / value;
    return this;
  }

  value() {
    return this.initial;
  }
}

/* calculate.add(5).multiple(5).subtract(3).divide(11).value(); */

let calculate = new Calculate();

console.log(calculate.add(5).multiple(5).subtract(3).divide(11).value());
