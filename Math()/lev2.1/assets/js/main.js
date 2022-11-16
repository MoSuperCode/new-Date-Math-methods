function roundTo(zahl, Genauigkeit) {
    let Zahl = zahl;
    Zahl.toFixed(Genauigkeit);
    return Zahl;
}
console.log(roundTo(3.1415926535, 5));