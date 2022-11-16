let today = new Date();
console.log(today);
let date1 = new Date("2222-10-23T13:25:11");
console.log(date1);


date1.setFullYear(2123);
date1.setMonth(1);
date1.setDate(24);
console.log(date1);

date1.setFullYear(2123);
date1.setMonth(2);
date1.setDate(24);
console.log(date1);

date1.setFullYear(2123);
date1.setMonth(3);
date1.setDate(3);
console.log(date1);

today.setDate(today.getDate() + 30);
console.log(date1);