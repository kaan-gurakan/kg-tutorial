let ad = "kaan"
let soyad="gurakan"
let yas ="45"
let sehir="bursa"

let mesaj =" ben adim " + ad + ' ve soyadim ' + soyad + '. ' + sehir + "'da yasiyorum " + " emeklilige "
+ (65 -yas) + " yilim kaldi. ";

mesaj = `ben adim ${ad} ve soyadim  ${soyad}.  ${sehir}'de yasiyorum . emeklilige ${65 -yas} yilim kaldi.`;

let emeklilik =(65 - yas > 0) ? "emeklilige " + (65-yas) + "yil kaldi." : "zaten emekli oldunuz";
mesaj = `ben adim ${ad} ve soyadim  ${soyad}.  ${sehir}'de yasiyorum . ${emeklilik}`;

console.log(mesaj);
