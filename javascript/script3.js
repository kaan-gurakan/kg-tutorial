let ogr1_ad = "ada";
let ogr1_soyad = "bilgi";
let ogr1_dogumtarihi = "2010";
let ogr1_mat1 = "70";
let ogr1_mat2 = "70";
let ogr1_mat3 = "80";
let ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(parseFloat(ogr1_ortalama));
console.log(typeof ogr1_ortalama);
console.log(ogr1_ortalama >= 50);


let ogr2_ad = "yigit";
let ogr2_soyad = "blgi";
let ogr2_dogumtarihi = "2012";
let ogr2_mat1 = "40";
let ogr2_mat2 = "40";
let ogr2_mat3 = "50";
let ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(parseFloat(ogr2_ortalama));
console.log(typeof ogr2_ortalama);
console.log(ogr2_ortalama >= 99);

let suankiyil = new Date().getFullYear();

let ogr1_yas = suankiyil - ogr1_dogumtarihi;
console.log(ogr1_yas);

let ogr2_yas = suankiyil - ogr2_dogumtarihi;
console.log(ogr2_yas);
