// find second largest element of the array..

const findSecondLargest = (a) => {
  let largest = -123456789;
  let secondLargest = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
      secondLargest = largest;
      largest = a[i];
    } else if(a[i] !== largest && a[i] > secondLargest) {
      secondLargest = a[i];
    }
  }
  return secondLargest;
};

let array = [1,2,3,9,10,4,5,6,7,8];
/* let array = [1, 3, 2]; */
console.log(findSecondLargest(array));
