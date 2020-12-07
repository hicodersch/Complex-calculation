let sayilar = [21,2,13,19,4,25,7,11,5,13];
   
for(let a = 0; a < sayilar.length; a++){
    let karekök = Math.sqrt(sayilar[a]);
    console.log("Dizi icindeki " + (a+1) +".inci sayinin karekökü  " + karekök);
    }

for(let a = 0; a < sayilar.length; a++){
    let kare = Math.pow(sayilar[a],2);
    console.log("Dizi icindeki "+ (a+1) +".inci sayinin karesi " +kare);
    }

let toplam = 0
for(let a = 0; a < sayilar.length; a++){
toplam += sayilar[a];
}
console.log("Dizi icindeki sayilarin toplami = "+ toplam);


average = toplam / sayilar.length;
console.log("Dizi icindeki sayilarin  ortalamasi = " + average);

let sayilar = [21,2,13,19,4,25,7,11,5,13];
min = sayilar[0];
mak = sayilar[0];

for(let a = 0; a < sayilar.length; a++){
if(sayilar[a] > mak)
{
mak = sayilar[a];
}
if(sayilar[a] < min)
{
min = sayilar[i];
}
}

console.log("Dizi icindeki en buyuk sayi .........." +mak);
console.log("Dizi icindeki en kucuk sayi .........." +min);
