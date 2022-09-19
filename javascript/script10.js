
// icinde yazan elemanlarla bir dizi olusturdum

let meyveler = [ "elma", "armut", "muz", "cilek"]; 

// dizinin kac elemanli oldugunu  gosterdim
// console.log(meyveler.length);     

//ilk ve son elemani gosteriyorum 

// console.log(meyveler[0]);
// console.log(meyveler[meyveler.length - 1]);

// elmanin bir dizi elemani olup olmadigini gosteriyorum
// console.log(meyveler.includes("elma"));
// console.log(meyveler.indexOf("elma"));

//kiraz meyvesini listenin sonuna ekledik 

// meyveler[meyveler.length] = "kiraz"
// meyveler[meyveler.length] = "kiraz"
meyveler.push("kiraz")



// dizinin son 2 elemanini siliyorum 

meyveler.pop();
meyveler.pop();

meyveler.slice(meyveler.length - 2 , 2);

// console.log(meyveler);

//bilgileri dizi icerisinde ssakladim ve her ogrencinin 
//yasini ve not ortalamasini hesapladim 

let ogr1 = [
    "yigit",
    "bilgi"
    ,2010,
    [70,60,80]
];
    
let ogr2 = [
    "ada",
    "bilgi"
    ,2012,
    [80,80,90]
];

let ogr3 = [
    "ahmet",
    "bilgi"
    ,2009,
    [60,60,70]
];    

let ogrenciler = [ogr1 , ogr2 , ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

// console.log(yigit_yas)
// console.log(ada_yas)
// console.log(ahmet_yas)

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_not.toFixed(1) , ada_not.toFixed(1) , ahmet_not.toFixed(1));







// length[ ] bastan sona 
// includes / indexOf () eleman bulma var mi yok mu 
// push / length siraya ekleme 
// pop / slice sondan eleman silme
//toFixed ondaliklari yazmiyor yada sen karar veriyosun 