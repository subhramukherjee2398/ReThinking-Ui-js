//Find the Pivot element of the Array.

const findPivot = (arr) => {
  array_length = arr.length;
  let start = 0;
  let end = array_length - 1;
  let left_sum = 0;
  let right_sum = 0;

  for (let i = 0; i < array_length; i++) {
    if (start == end && left_sum == right_sum) {
      return arr[start];
    }

    if (start == end) {
      return -1;
    }

    if (left_sum > right_sum) {
      right_sum = right_sum + arr[end];
      end--;
    } else if (right_sum > left_sum) {
      left_sum = left_sum + arr[start];
      start++;
    } else {
      // if (left sum == right sum but start !== end)
      right_sum = right_sum + arr[end];
      end--;
      //or
      /* left_sum = left_sum + arr[start];
            start++; */
    }
  }
};

console.log(findPivot([1, 2, 3, 4, 6])); // expected output : 4
