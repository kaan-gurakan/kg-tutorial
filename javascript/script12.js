
let siparis_1 = {
   "siparis_id": 101,
   "siapris_tarihi": "30.12.2022",
   "odeme_sekli": "kredi karti",
   "kargo_adresi": {
    "mahalle": "yahya kaptan",
    "ilce": "izmit",
    "sehir": "kocaeli"
   },

 "urunler": [
    {
        "urun_id": 5,
        "urun_adi": "iphone 13 pro",                    
        "urun_url": "http://abc.com/iphone-13-pro",
        "urun_fiyat": 22000
    },
    {
        "urun_id": 6,
        "urun_adi": "iphone 13 pro max",
        "urun_url": "http://abc.com/iphone-13-pro-max",
        "urun_fiyat": 30000
    }
  ]
};
let siparis_2 = {
    "siparis_id": 101,
    "siapris_tarihi": "30.12.2022",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
     "mahalle": "yahya kaptan",
     "ilce": "izmit",
     "sehir": "kocaeli"
    },
 
  "urunler": [
     
     {
         "urun_id": 6,
         "urun_adi": "iphone 13 pro max",
         "urun_url": "http://abc.com/iphone-13-pro-max",
         "urun_fiyat": 30000
     }
   ]
 };

 let siparis_1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
 let siparis_2_toplam = (siparis_1.urunler[0].urun_fiyat ) * 1.18;

let toplam_siparis = siparis_1_toplam + siparis_2_toplam;

console.log("siparis_1:" + siparis_1_toplam)
console.log("siparis_2:" + siparis_2_toplam)

console.log("toplam odenen miktar" , toplam_siparis);

 let siparisler = [siparis_1 , siparis_2];