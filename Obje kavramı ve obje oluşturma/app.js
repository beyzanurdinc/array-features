//Objenin basit tanımı
//Objeler, içerisinde birden fazla değeri depolayan yapılardır.Property olarak bilinen bu değerler primitive(String, number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

let value;

const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25,
    email : "coskun.m.murat@gmail.com",
    langs : ["Python","Java","JavaScript"],
    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı çalışıyor...")

    }
}



value = programmer;
value = programmer.email;//genel olarak
value = programmer["email"];


value = programmer.langs;


value = programmer.address.city;


programmer.work();

const programmers = [
    {name : "Mustafa Murat",age:25},
    {name : "Oğuz",age:25}
]

value = programmer[0].name;

console.log(value);
