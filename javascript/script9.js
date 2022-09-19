let simdi = new Date(); //simdiki tarih ve saat bilgisi
//get metod
sonuc = simdi
sonuc = simdi.getDate();
sonuc = simdi.getDate();
sonuc = simdi.getDate();
sonuc = simdi.getDate();
sonuc = simdi.getTime(); 
//set metod

simdi.setFullYear(2025);
simdi.setMonth(7)
simdi.setDate(15)

sonuc = simdi;


let dogumtarihi = new Date(1990,5,15);

sonuc = simdi.getFullYear() - dogumtarihi.getFullYear();

let milisecond = simdi - dogumtarihi;

let saniye = milisecond / 1000;
let dakika = saniye / 60;

sonuc = saniye ;

console.log(sonuc)
console.log(typeof sonuc)

