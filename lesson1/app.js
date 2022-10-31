//==============================
//KONSOL
console.log("Hello JavaScript") //like println 
alert("STOP") //yukarida bir alert cikartir
console.warn("bu bir uyaridir") //consolda yazdirir
console.error("Bu bir hatadir") //consolda yazdirir
prompt("adinizi giriniz") // like scanner   


//========= degisken tanimlama=======
//========= VAR =====================

var isim="Zeynep" //tirnaktan anlar string oldugunu //var oldugu icin public islevi gorur 
console.log(typeof isim)
isim=3.14
console.log(typeof isim)


//=========Const================

const piSayisi=3.14 // nerede yazildiysa orada kullanimi olur 
// piSayisi=3 
//Sonradan degeri degistirilemez (non-primitive'ler haric )

const isim1="Osman"
// const da veriable olusuturulup atamasi sonradan yapilamaz. Hiclik atanmis olur ve const bunu degistirmez

//=========LET ===============

let fiyat;
fiyat=10
console.log(typeof fiyat)
fiyat="Erdem"


//string tanimlamak icin 3 farkli karakter kullanilabilir 

let name1="Ahmet"
let name2='Mehmet'
let name3=`Hasan`
console.log(name3)


//=======Aritmatik operatorler 


const cola=5
const cips=6
const bread=2 
console.log(cola+cips+bread)
console.log("total price: ", cola+cips+bread)


const name4="Can"
const surname="canan"
console.log(name4+surname)


const s1=7
let s2= "7"
console.log(s1+s2) //77 

console.log("benim adim "+ name4 + "yasim " + s1)

//======Template literal==========
console.log(`benim adim ${name4} yasim ${s1}`)


//ust alma
const taban=2
const ust=3

console.log(taban**ust)//2*2*2


//mod alma %

const sayi=123
// birler basamagi nedir?
const birler= 123%10
console.log(birler)


//=====Comparison operators====
const s5=5
const s4="5"
console.log(s5==s4) // true 
console.log(s3===s4) // tipe de bakar false


//======todo backup=====

const price1="100"

console.log(price1+15)//10015
console.log(Number(price1)+15)  //115

const number= 56
console.log(String(number)+number) //5656
console.log(typeof number)











