// Rearrange Array such that Even Index elements are Smaller and Odd Index Elements are Greater

let data = [6, 4, 2, 1, 8, 3];

const Arrange = (a, lenght) => {
  let temp = 0;

  for (let i = 0; i < lenght; i++) {
    if (i % 2 == 0 && a[i] >= a[i + 1]) {
      temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
    }
    if (i % 2 != 0 && a[i] <= a[i + 1]) {
      temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
    }
  }

  return a;
};

console.log(Arrange(data, data.length));
