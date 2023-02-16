//Fonksiyon Tanımlama
//Objenin içinde metod=fonksiyon

// function merhaba(name = "Bilgi yok",age = "Bilgi yok"){
//     if (typeof name === "undefined") name = "Bilgi Yok";
//     if (typeof age === "undefined") age = "Bilgi Yok";

//     console.log(`İsim: ${name} Yaş:${age}`);
// }

// merhaba("Murat",25); //Fonksiyon çağrısı(Function call)

// merhaba("Ayşe",20);

// merhaba();

// merhaba("kadır");




//Fonksiyonlarda Return

// function square(x) {
//     return x * x;

//     console.log("Naber"); //Hiç bir zaman çalıştırılmadı.

// }

// function cube(x) {
//     return x * x * x;

// }

// let a = cube(square(12));

// console.log(a);





// function merhaba(){
//     return "Merhaba";
// }
// console.log(merhaba());




//Function Expression

// const merhaba = function(name){
//     console.log("Merhaba" + name);

// }
// merhaba("Murat");



//Immediately Invoked Function Expression (IIFE)
//Tanımlandığı yerde çalışan fonksiyondur.

(function (name) {
    console.log("Merhaba: " + name);
})("Murat");



const database = {
    host: "localhost",
    add: function () {
        console.log("Eklandi");
    },
    get: function () {
        console.log("Elde Edildi");
    },
    update: function () {
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function () {
        console.log(`Id: ${id} Silindi`);
    }
}


console.log(database.host);

database.add();

database.delete(10);







