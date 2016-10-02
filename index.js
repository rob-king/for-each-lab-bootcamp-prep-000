/*function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${array.indexOf(element)}: ${element}`);
  })
}*/

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(func) {
  var array = [1,2,3,4];
  array.forEach(func);
  return array;
}

function doToArray(array, func) {
  array.forEach(func);
}
