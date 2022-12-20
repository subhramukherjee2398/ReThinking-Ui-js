// Remove Duplicates In Sorted Array

function replaecDuplicate(a, length) {
  let i = 0 ;
  for(let j = i+1 ; j<length;j++){
      if(a[i] !== a[j]){
        i++;
        a[i] = a[j]
      }
  }
  a.length = i+1;
  console.log(a)
}

let data = [0, 0, 1, 1, 2, 2, 3, 4, 4, 4];


replaecDuplicate(data, data.length);
