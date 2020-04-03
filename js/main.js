"use strict";


let week = ['пн','вт','ср','чт','пт','сб','вс' ];
let date = new Date().getDay();

week.splice(date-1, 1 , week[date-1].bold());
week.splice(5, 2, week[date].italics(), week[date+1].italics());
console.log(week.join('\n'));


