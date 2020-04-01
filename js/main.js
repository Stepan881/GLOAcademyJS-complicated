"use strict";

let arr = ['123', '234', '345', '456', '567', '678', '789', '890'];

arr.forEach(element => {
  if (element[0] === '2' || element[0] === '4') {
    console.log(element);
  }
});

nextPrime:
for (let i = 2; i < 100; i++) {
  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
      continue nextPrime;
    }    
  }
  console.log(i + ': делитель этого числа 1 и ' + i);
}

