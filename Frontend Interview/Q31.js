//Check For Pair In An Array With a Given Sum

const Pair = (arr, key, l) => {
  for (let i = 0; i < l; i++) {
    let f = key - a[i];
    for (let j = i+1; j < l; j++) {
      if (f == a[j]) {
        console.log("two numbners are...", a[i], a[j]);
      }
    }
  }
};

let a = [8, -2, 3, 4];
let key = 6;

Pair(a, key, a.length);
