function amPm(date) {
    let time = date.getHours();
    console.log(time);
    // normal if / else
    if (time <= 12) {
        console.log("AM");
    } else if (time < 23 && time > 12) {
        console.log("PM");
    }
    // einzeiler
    let func = time <= 12 && time > 0 ? "AM" : "PM";
    console.log(func);
}






date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //AM
date4 = new Date(2000, 1, 1, 11); //AM
amPm(date1);
amPm(date2);
amPm(date3);
amPm(date4);