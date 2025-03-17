// console.log('Hello');
//1. String

var customerName = "Bakyt";
var surname = "Sariev";
var first_name = "Kuban";
var firstName = "Altyn";
var $ = 45;
var $num = 42;
var num$ = 41;
var _ = 5454;
var _num = 54;
var num_ = 45;
var num234 = 45;
var fullName = customerName + " " + surname;
var file = "d:\\data\\profile\\avatar.jpg";
// var 45 = 454;
// var 45erg = 454;
// var var
// var const

console.log("Имя:", customerName);
console.log("Фамилия:", surname);
console.log("fullName:", fullName);
console.log("file:", file);
console.log('ОАО "Северэлектро" file');
console.log("Имя:" + customerName + " " + surname);
console.log(`Имя: ${customerName},  фамилия: ${surname}, возраст: ${num_}`);

// 2 Number

var number = 42;
var number2 = 3.14;
var a = 10;
var b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(17 % 6);
console.log(a ** b);
console.log(10 * 10 * 10 * 10 * 10);

console.log(16 % 2);
console.log(a / 0 + 5);
console.log(0 / a);
console.log(isFinite(number), "isFinite");
console.log(isFinite(number / 0), "isFinite");

console.log(654654654654 + "10%");
console.log("654654654654" + 10);

var number10 = "500";
var number11 = 100;
console.log("sum:", Number(number10) + number11);
console.log(number10 * "text");

console.log(typeof number10);
console.log(typeof number11);

//Оператор сравнения
// a=15
// b=15
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
var c = 15;
var d = "15";
console.log(c === d); //false
console.log(c == d); //true
console.log(c !== d); //true
console.log(c != d); // false
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true

//операторы присваивания

var x = 5;

// x+=3 // x=x+3 8
// x-=2 // x=x-2 6
// x*=4 // x=x*4 24
// x/=2// x=x/2 12
// x%=3// x=x%3 0

console.log((x += 3));
console.log((x -= 2));
console.log((x *= 4));
console.log((x /= 2));
console.log((x %= 3));
console.log(typeof x);

//условные конструкции

var age = 17;

var age2 = prompt("введите число");
console.log("age2:", age2);
console.log("age2:", typeof age2);

if (age2 >= 1000) {
  console.log("Вы бессмертный");
} else if (age2 >= 18) {
  console.log("Вы совершеннолетний");
} else if (age2 > 0) {
  console.log("Вы не совершеннолетний");
} else {
  console.log("Вы не правильно указали возраст");
}
