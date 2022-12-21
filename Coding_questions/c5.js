// Swap First & Last Character of a String

function swap(str) {
  let l = str.length;

  console.log(str.charAt(l - 1) + str.substr(1, l - 2) + str.charAt(0));
}

swap("hello"); // expected : oellh  
