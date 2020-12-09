/**
 *En az 10 sayidan olusan bir array olusturunuz. Array icindeki sayilarin: 
-- kareköklerini 
-- karelerini 
-- tüm sayilarin toplamini
-- ortalamasini
-- en büyük ve en kücük sayiyi
bulan program
 *  
 **/

let sayilar = [21, 2, 13, 19, 4, 25, 7, 11, 5, 13];         // 10 sayidan olusan array olusturma


for (let index = 0; index < sayilar.length; index++) {                   //Dizi icindeki sayilarin karekokunu bulma
    let karekok = Math.sqrt(sayilar[index]);
    console.log("Dizi icindeki " + (index + 1) + ".inci sayinin karekokü  " + karekok);
}

for (let index = 0; index < sayilar.length; index++) {                  //Dizi icindeki sayilarin karesini bulma
    let kare = Math.pow(sayilar[index], 2);
    console.log("Dizi icindeki " + (index + 1) + ".inci sayinin karesi " + kare);
}

let toplam = 0                                              //Dizi icindeki sayilarin toplamini bulma
for (let index = 0; index < sayilar.length; index++) {
    toplam += sayilar[index];
}
console.log("Dizi icindeki sayilarin toplami = " + toplam);

let average = toplam / sayilar.length;                      //Dizi icindeki sayilarin ortalamasini bulma
console.log("Dizi icindeki sayilarin  ortalamasi = " + average);

                                                            // Dizi icindeki sayilarin en buyuk ve en kucuk degerlerini bulma
let min = sayilar[0];                                       //Dizinin ilk degeri en kucuk degermis gibi dusunelim
let mak = sayilar[0];                                       //Dizinin ilk degeri en buyuk degermis gibi dusunelim

for (let index = 0; index < sayilar.length; index++) {
    if (sayilar[index] > mak) {                                 //burada dizinin a.nici elemaninin maksimum degeri olarak verdigimiz mak degerinden buyuk olup olmadigini sorguluyoruz
        mak = sayilar[index];                                   //eger dizinin a.nici elemani mak degerinden buyuk ise mak deger dizinin a.inci degeridir.
    }                                                       //eger dizinin a.nici elemani mak degerinden buyuk degil ise
    if (sayilar[index] < min) {                                 //burada dizinin a.nici elemaninin minimum degeri olarak verdigimiz min degerinden kucuk olup olmadigini sorguluyoruz
        min = sayilar[index];                                   //eger dizinin a.nici elemani min degerinden kucuk ise min deger dizinin a.inci degeridir
    }
}

console.log("Dizi icindeki en buyuk sayi .........." + mak);    //Dizinin en buyuk elamanini yazdirma
console.log("Dizi icindeki en kucuk sayi .........." + min);    //Dizinin en kucuk elemanini yazdirma