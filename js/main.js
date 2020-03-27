let num = 266219;

let res = 1;

num = String(num);
for (let i = 0; i < num.length; i++) {
  res *= num[i];
}
console.log(res);

res **= 3;

console.log(String(res).slice(0,2));
