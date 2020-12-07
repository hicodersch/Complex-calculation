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


// 10 sayidan olusan array olusturma
let sayilar = [21, 2, 13, 19, 4, 25, 7, 11, 5, 13];

//Dizi icindeki sayilarin karekokunu bulma
for (let a = 0; a < sayilar.length; a++) {
    let karekok = Math.sqrt(sayilar[a]);
    console.log("Dizi icindeki " + (a + 1) + ".inci sayinin karekokü  " + karekok);
}

//Dizi icindeki sayilarin karesini bulma
for (let a = 0; a < sayilar.length; a++) {
    let kare = Math.pow(sayilar[a], 2);
    console.log("Dizi icindeki " + (a + 1) + ".inci sayinin karesi " + kare);
}

//Dizi icindeki sayilarin toplamini bulma
let toplam = 0
for (let a = 0; a < sayilar.length; a++) {
    toplam += sayilar[a];
}
console.log("Dizi icindeki sayilarin toplami = " + toplam);

//Dizi icindeki sayilarin ortalamasini bulma
average = toplam / sayilar.length;
console.log("Dizi icindeki sayilarin  ortalamasi = " + average);

// Dizi icindeki sayilarin en buyuk ve en kucuk degerlerini bulma
let min = sayilar[0];//Dizinin ilk degeri en kucuk degermis gibi dusunelim
let mak = sayilar[0];//Dizinin ilk degeri en buyuk degermis gibi dusunelim

for (let a = 0; a < sayilar.length; a++) {
    if (sayilar[a] > mak) { //burada dizinin a.nici elemaninin maksimum degeri olarak verdigimiz mak degerinden buyuk olup olmadigini sorguluyoruz
        mak = sayilar[a];//eger dizinin a.nici elemani mak degerinden buyuk ise mak deger dizinin a.inci degeridir.
    }//eger dizinin a.nici elemani mak degerinden buyuk degil ise
    if (sayilar[a] < min) {//burada dizinin a.nici elemaninin minimum degeri olarak verdigimiz min degerinden kucuk olup olmadigini sorguluyoruz
        min = sayilar[i];//eger dizinin a.nici elemani min degerinden kucuk ise min deger dizinin a.inci degeridir
    }
}

console.log("Dizi icindeki en buyuk sayi .........." + mak);//Dizinin en buyuk elamanini yazdirma
console.log("Dizi icindeki en kucuk sayi .........." + min);//Dizinin en kucuk elemanini yazdirma