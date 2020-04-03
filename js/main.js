"use strict";

const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let date = new Date().getDay() ;
let arr = [];

week.forEach((el, i) => {
  arr.push(el);

  if (date === i) {
    arr[i] = el.italics();
  } 
  if (el === 'вс' || el === 'сб') {
    arr[i] = el.bold();
  }   
  if ((el === 'вс' && date === i) || (el === 'сб' && date === i)) {
    arr[i] = el.italics().bold();
  } 
});

document.write(arr.join('\n'));
