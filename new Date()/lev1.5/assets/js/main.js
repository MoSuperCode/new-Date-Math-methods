let months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const date1 = new Date();
// Way 1
function monatsName(year, month, day) {
    date1.setDate(day);
    date1.setMonth(month);
    date1.setFullYear(year);
    return months[month - 1];
};
// Way 2
console.log(monatsName(2001, 3, 4)); //März
console.log(monatsName(2019, 12, 24)); //Dezember
console.log(monatsName(1410, 07, 15)); //Juli

function monatsName2(day) {
    let nigaDate = new Date(day);
    return months[nigaDate.getMonth()];
};
console.log(monatsName2("2001,3,4")); //März
console.log(monatsName2("2019,12,24")); //Dezember
console.log(monatsName2("1410,07,15")); //Juli
