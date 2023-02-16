//Birden fazla değeri depolamak için kullanılır.

let value;

const numbers = [43,56,33,23,44,35,5];

//const numbers2 = new Array(1,2,3,4,5);  şeklinde de tanıtılabilir.

const langs = ["Python","Java","C++","JavaScript"];

const a = ["Merhaba",22,null,undefined,3.14];

//Uzunluk
value =numbers.length;

//İndeksleme
value = numbers[0];


//Herhangi bir indexteki değeri değiştirme
numbers[2] = 100;
value = numbers;


//İndex of 
value = numbers.indexOf(100);


//Arrayin sonuna değer ekleme-push
numbers.push(423);
value = numbers;


//Başına ekleme
numbers.unshift(3000);
value = numbers;


//Sonundan değer atma
numbers.pop()
value = numbers;


//Başından değer atma
numbers.shift()
value = numbers;


//Belli bir indekten diğer bir indekse kadar atar/siler.
numbers.splice(0,3);
value = numbers;


//Arrayi ters çevirir
numbers.reverse()
value = numbers;


//Sort ilk sayıya göre sıralama
value = numbers.sort();


value = numbers.sort(function(x,y){//Küçükten büyüğe
    return x - y;
})
value = numbers.sort(function(x,y){//Büyükten küçüğe
    return y - x;
})

console.log(value);