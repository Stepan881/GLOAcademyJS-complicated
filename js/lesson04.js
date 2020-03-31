"use strict";

function func(arg) {
  if (typeof arg !== "string") {
    console.log('Передана не строка');
  }
  let res = arg.trim();

  if (res.length > 30) {
    res = res.substring(0, 30) + ' ...';
  }

  return res;
};

console.log(func(' 12345678901234567890asdqwezxcr 12345678901234567890 '));

