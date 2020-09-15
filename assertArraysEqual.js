
const eqArrays = function (arr1, arr2) {
  let equalLen = false; 
  const notSame = 'These are not equal'; 
  const same = 'These are equal';
  if (arr1.length == arr2.length) {
    equalLen = true; 
  } 
  if (equalLen) {  
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {  
        console.log(notSame); 
        return 0;
      } 
    } 
    console.log(same); 
    return 1;
  } 
  console.log(notSame); 
  return 0;
}

eqArrays([1, 2, 3, 5], [1, 2, 3]), true; // => should PASS