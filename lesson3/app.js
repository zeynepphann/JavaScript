//=================================

Fonksiyonlar 

// 1.Function Declaration
// Declaration yontemi ile fonksiyonun tanimlanmasi cagrilmasinden once veya sonra olabilir 


// fonksiyonun tanimlanmasi
function yazdirAd()
{
    console.log("Hakan")
}

// fonsiyonun cagrilmasi
yazdirAd(); //Hakan yazdiracak 

//ornek : kullanicidan alinan sayinin tek mi cift mi oldugunu gosteren bir fonk. yaziniz 

const sayimiz=prompt("sayi giriniz")
console.log(tekCift(sayimiz))

function tekCift(sayimiz) {
    sayimiz%2==0 ? "sayi cifttir" : "sayi tektir"
}

// 2. Function Expression

const tekCift1=function(sayi){
return sayi%2==0 ? "Cift" : "Tek"
}

console.log(tekCift1(5))











