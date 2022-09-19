// let toplam = 0

// for(let i = 1; i<=10; i++) {
//     toplam += i;

// }
// console.log(toplam);

let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5];

let toplam = 0;

// for(let i=0; i < sayilar.length ; i++) {
//   toplam += sayilar[i]
// }

// for(let i in sayilar) {
//     toplam += sayilar[i];
// }

// for (let sayi of sayilar) {
//   toplam += sayi;
// }

// console.log(toplam);

// let user = {
//   name: "kaan gurakan",
//   username: "kaangurakan",
//   password: "12345",
//   email: "info@sadikturan.com",
// };

// for (let eleman in user) {
//   console.log(eleman);
//   console.log(user[eleman]);
// }

let cities = ["denizli", "bursa", "ankara", "izmir"];

cities.forEach((eleman, index) => {
    console.log(`${index+1}. city name : ${eleman}`);
  });
