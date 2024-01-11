array1 = [1, 20, 22, 24, 5];
array2 = ["hi", "hello", "good"];

function arraySwap(array) {
  let temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
}

arraySwap(array1);
arraySwap(array2);

console.log(array1);
console.log(array2);
