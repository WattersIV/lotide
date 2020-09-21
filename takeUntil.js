const takeUntil = (array, callback) => {
  let output = []; 
  let check;
  for (let i = 0; (!check); i++){
    check = callback(array[i]);
    output.push(array[i - 1]);
  } 
  const badValue  = output.shift(); 
  return output;
} 

module.exports = takeUntil;