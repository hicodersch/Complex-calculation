/**         ARRAYIN ELEMANLARI ILE MATEMATIK ISLEMLER
 En az 10 sayidan olusan bir array olusturunuz. Array icindeki sayilarin: 
-- kareköklerini 
-- karelerini 
-- tüm sayilarin toplamini
-- ortalamasini
-- en büyük ve en kücük sayiyi
bulan program
 
 */

let sayilar = [21, 2, 13, 19, 4, 25, 7, 11, 5, 13];                     // 10 sayidan olusan array olusturma


for (let index = 0; index < sayilar.length; index++) {                   //Dizi icindeki sayilarin karekokunu bulma
    let karekok = Math.sqrt(sayilar[index]);
    console.log("Dizi icindeki " + (index + 1) + ".inci sayinin karekokü  " + karekok);
}

for (let index = 0; index < sayilar.length; index++) {                  //Dizi icindeki sayilarin karesini bulma
    let kare = Math.pow(sayilar[index], 2);
    console.log("Dizi icindeki " + (index + 1) + ".inci sayinin karesi " + kare);
}

let toplam = 0                                                           //Dizi icindeki sayilarin toplamini bulma
for (let index = 0; index < sayilar.length; index++) {
    toplam += sayilar[index];                                            //Burda toplamin üstüne dizinin elemanlari ekleniyor  
}
console.log("Dizi icindeki sayilarin toplami = " + toplam);

let average = toplam / sayilar.length;                                   //Dizi icindeki sayilarin ortalamasini bulma
console.log("Dizi icindeki sayilarin  ortalamasi = " + average);

                                                                         // Dizi icindeki sayilarin en buyuk ve en kucuk degerlerini bulma
let min = sayilar[0];                                                    //Dizinin ilk degeri en kucuk degermis gibi dusunelim
let max = sayilar[0];                                                    //Dizinin ilk degeri en buyuk degermis gibi dusunelim

for (let index = 0; index < sayilar.length; index++) {
    if (sayilar[index] > max) {                                         //burada dizinin index.inci elemaninin maxsimum degeri olarak verdigimiz max degerinden buyuk olup olmadigini sorguluyoruz
        max = sayilar[index];                                           //eger dizinin index.inci elemani max degerinden buyuk ise max deger dizinin index.inci degeridir.
    }                                                                   //eger dizinin index.inci elemani max degerinden buyuk degil ise
    if (sayilar[index] < min) {                                         //burada dizinin index.inci elemaninin minimum degeri olarak verdigimiz min degerinden kucuk olup olmadigini sorguluyoruz
        min = sayilar[index];                                           //eger dizinin index.inci elemani min degerinden kucuk ise min deger dizinin index.inci degeridir
    }
}

console.log("Dizi icindeki en buyuk sayi .........." + max);             //Dizinin en buyuk elamanini yazdirma
console.log("Dizi icindeki en kucuk sayi .........." + min);             //Dizinin en kucuk elemanini yazdirma