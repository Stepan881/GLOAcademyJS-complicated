let num = 266219;

let res = 1;

num = String(num);
for (let i = 0; i < num.length; i++) {
  res *= num[i];
}
console.log(res);

res **= 3;

console.log(String(res).slice(0,2));

// lesson3

const lang = 'ru';

const dayRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const dayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
  console.log(dayRu);  
} else if (lang === 'en') {
  console.log(dayEn);  
}

switch (lang) {
  case 'ru':
    console.log(dayRu);
    break;
  case 'en': 
    console.log(dayEn);
    break;
}

const arr = [
  ['ru', dayRu], 
  ['en', dayEn]
];


for (let i = 0; i < arr.length; i++) {
  arr[i][0] === lang ? console.log(arr[i][1]) : '';  
}

const amePerson = 'Артем';
console.log(amePerson === 'Артем'? 'директор': amePerson === 'Максим' ? 'преподаватель' : 'студент');

