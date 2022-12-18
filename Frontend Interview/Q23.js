// move all zeros to end

// [7,0,8,0,0,4,8,3,0,1]

function moveZeros(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }
  while(count < arr.length){
    arr[count++] = 0;
  }
  return arr;
}
let data = [1, 0, 2, 0, 0, 3, 4, 5, 0, 6];
console.log(moveZeros(data));
