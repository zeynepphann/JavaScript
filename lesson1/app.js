//==============================
//KONSOL
console.log("Hello JavaScript")
alert("STOP")
console.warn("bu bir uyaridir")
console.error("Bu bir hatadir") 
prompt("adinizi giriniz")


//========= degisken tanimlama=======
//========= VAR =====================

var isim="Zeynep"
console.log(typeof isim)
isim=3.14
console.log(typeof isim)


//=========Const================

const piSayisi=3.14
// piSayisi=3 const degistirilemez

const isim1="Osman"

//=========LET ===============

let fiyat;
fiyat=10
console.log(typeof fiyat)
fiyat="Erdem"


//string tanimlamak icin 3 farkli karakter kullanilabilir 

let name1="Ahmet"
let name2="Mehmet"
let name3="Hasan"
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
console.log(`benim adim ${name4} yasim ${s1}`)

//======Template literal==========

//ust alma
const taban=2
const ust=3

console.log(taban**ust)


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
console.log(String(number)+number)
console.log(typeof number)











