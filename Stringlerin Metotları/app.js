let value;

const firstName = "Louis";
const lastName = "Armsterdam";
const langs = "Java, Python, C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Mustafa Murat";

value += "Coşkun"; //value = values + "Coşkun"; ile aynı görevi yapar.

//Length metin uzunluğunu verir.
value = firstName.length;

//Concat birkaç metin birleştirilebilir.
value = firstName.concat();

//toLowerCase bütün kaarakterler küçük harf olur.
value = firstName.toLowerCase();

//toUpperCase bütün kaarakterler büyük harf olur.
value = firstName.toUpperCase();

//Direk karakteri verir.
value = firstName[0];
value = firstName[firstName.length - 1];


//Index of bulunduğumuz karakterin hangisi olduğunu bize söyler.
value = firstName.indexOf("L");


//char at verdiğimiz sayıda hangi harf vardır .
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);


//split virgüllerle ayrılmış elemanları tek tek almamızı sağlar.Parçalama metotudur.
value = langs.split(",");


//Virgülle sıralanmış öğelerden birilerini değiştirmek istesek bunu kullanırız.
value = langs.replace("Python", "CSS")


//Includes belli alanlar sorgulatır.
value = langs.includes("Java");
value = langs.includes("lvkjfnvhdm");


console.log(value);