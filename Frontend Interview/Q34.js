//Return the indexes of NaN in Array

const check = (arr) => {
  return arr.reduce((acc, val, index) => {
    if (val !== val) {
      // or use Number.isNumber or isNaN()
      acc.push(index);
    }
    return acc;
  }, []);
};

const arr = [1, 2, NaN, NaN, 12, NaN];
console.log(check(arr));
//expected output : [2,3,5]
