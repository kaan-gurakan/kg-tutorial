//dick ,json
let usera = {
    "ad" : "sadik",
    "soyad" : "turan",
    "yas" : "38",
    "adres" : {
        "sehir" : "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema","spor"]
}

let userb = {
    "ad" : "cinar",
    "soyad" : "gul",
    "yas" : "28",
    "adres" : {
        "sehir" : "bursa",
        "ilce": "nilufer"
    },
    "hobiler": ["sinema","spor"]
}
let sonuc;

sonuc = usera.ad;
sonuc = usera.soyad;
sonuc = usera["yas"];
sonuc = usera.adres.sehir;
sonuc = usera.adres.ilce;
sonuc = usera.hobiler[1]

let users =[
    usera,
    userb
];

sonuc= users[1].ad;

let urunler = [
    {
        "urun_adi":"samsung s22",
        "urun_fiyat":"13000"
    },
    {
        "urun_adi":"samsung s23",
        "urun_fiyat":"15000"
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc)