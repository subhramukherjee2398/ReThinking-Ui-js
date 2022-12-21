// Reverse a String without Affecting Special Characters

const ReverseOnlyLettersb = (S) => {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  let new_string_array = [];

  let String_Array = S.split("");

  for (let i = 0; i < String_Array.length; i++) {
    if (String_Array[i].match(/[a-z]/g)) {
      new_string_array.push(String_Array[i]);
    }
  }

  console.log(new_string_array); // ['a', 'b', 'c']
  let result = new_string_array.reverse(); // ['c', 'b', 'a']
};

console.log(ReverseOnlyLettersb("a$bc"));

// not complete..