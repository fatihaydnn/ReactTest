const users = [
    {name:"Fatih", age : 23},
    {name:"Fatih", age : 29},
    {name:"Serdar", age : 28},
    {name:"Mert", age : 13}]
/*
push        ==> Eleman Ekleme
map         ==> For Döngüsü
find        ==> Verdiğimiz koşullara uygun olanı getiriyor.
filter      ==> Verdiğimiz koşullara uygun olanları getirir.
some        ==> Verdiğimiz koşula sahip olan biri var mı yok mu kontrolü.
every       ==> Arayin bütün elemanlarının şarta uygun olmasını bekler.
includes    ==>
*/

// users.push("Betül");
// console.log(users);

users.map((item)=>{
    console.log(item.name);
});

const findIt = users.find((item) => item.name === "Fatih" && item.age > 28);
console.log(findIt);

const filtered = users.filter((item) => item.name === "Fatih")
console.log(filtered);

const some = users.some(item => item.age === 29);
console.log("some : "+some);

const every = users.every(item => item.age > 5)
console.log("every : "+every);

const meyveler = ['elma','armut', 'muz'];
const isInclude = meyveler.includes("elma");
console.log("include : "+isInclude);