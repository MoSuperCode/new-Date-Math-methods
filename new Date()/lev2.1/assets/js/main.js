function dateOfToday() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    console.log(date);
    let output = document.getElementById("output");
    output.innerHTML = `${day}-${month}-${year} <br> ${day}/${month}/${year}`;
}
dateOfToday();