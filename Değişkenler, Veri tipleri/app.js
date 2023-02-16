//Değişken Oluşturma
//Değişkenler programlama dillerinde bir veriyi tutacağımız en temel birimlerdir.


// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);


//JavaScript Veri Tipleri

//Primitive veri tipleri=Sadece o değişkenin değerini verir bize.

// //Number veri tipi:
// var a = 10;//Number veri tipi
// var b = 3.14;// Number veri tipi
// console.log(typeof a);
// console.log(typeof b);


// //String veri tipi:
// var name ="Mustafa";
// console.log(typeof name);



// //Boolean veri tipi:
// var a = true;
// console.log(typeof a);


// //null veri tipi:
// var a = null;
// console.log(a);
// console.log(typeof a);


// //undefined veri tipi:
// var a ;
// console.log(a);



//Referance veri tipleri=Referanslar üzerinden bellekte bir yeri gösteriyor ve referanslar üzerinden o değeri alabiliyoruz.

// //Array veri tipi:

// var numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[0]);


// //Object veri tipi:
// var person ={
//     name:"Mustafa Murat",
//     age:25}
    
// console.log(person);
// console.log(typeof person);


// //Date object veri tipi:
// var date = new Date();
// console.log(date);
// console.log(typeof date);



// //Primitiv örneği
// var a = 10;
// var b = a;
// console.log(a,b);

// a = 20;
// console.log(a,b);


//Referance örneği
var a = [1,2,3];
var b = a;

a.push(4);
console.log(b);