//Polyfill for JavaScript String repeat method |

String.prototype.myRepeat = function (count) {
  // if count is in string we need to convert
  // for float numbers
  count = +count;
  count = Math.floor();
  if (this == null) {
    throw TypeError("cannot convert");
  }
  if (this.length == 0 || count == 0) {
    return "";
  }
  let result = "";
  if (count > 0) {
    while (count) {
      result += this;
      count--;
    }
  } else {
    return "Out of Range";
  }
  return result;
};

console.log("abc ".myRepeat(-2));
