// // console.log('Hello');
// //1. String

// var customerName = "Bakyt";
// var surname = "Sariev";
// var first_name = "Kuban";
// var firstName = "Altyn";
// var $ = 45;
// var $num = 42;
// var num$ = 41;
// var _ = 5454;
// var _num = 54;
// var num_ = 45;
// var num234 = 45;
// var fullName = customerName + " " + surname;
// var file = "d:\\data\\profile\\avatar.jpg";
// // var 45 = 454;
// // var 45erg = 454;
// // var var
// // var const

// console.log("Имя:", customerName);
// console.log("Фамилия:", surname);
// console.log("fullName:", fullName);
// console.log("file:", file);
// console.log('ОАО "Северэлектро" file');
// console.log("Имя:" + customerName + " " + surname);
// console.log(`Имя: ${customerName},  фамилия: ${surname}, возраст: ${num_}`);

// // 2 Number

// var number = 42;
// var number2 = 3.14;
// var a = 10;
// var b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(17 % 6);
// console.log(a ** b);
// console.log(10 * 10 * 10 * 10 * 10);

// console.log(16 % 2);
// console.log(a / 0 + 5);
// console.log(0 / a);
// console.log(isFinite(number), "isFinite");
// console.log(isFinite(number / 0), "isFinite");

// console.log(654654654654 + "10%");
// console.log("654654654654" + 10);

// var number10 = "500";
// var number11 = 100;
// console.log("sum:", Number(number10) + number11);
// console.log(number10 * "text");

// console.log(typeof number10);
// console.log(typeof number11);

// //Оператор сравнения
// // a=15
// // b=15
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// var c = 15;
// var d = "15";
// console.log(c === d); //false
// console.log(c == d); //true
// console.log(c !== d); //true
// console.log(c != d); // false
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true); // false
// console.log(!false); // true

// //операторы присваивания

// var x = 5;

// // x+=3 // x=x+3 8
// // x-=2 // x=x-2 6
// // x*=4 // x=x*4 24
// // x/=2// x=x/2 12
// // x%=3// x=x%3 0

// console.log((x += 3));
// console.log((x -= 2));
// console.log((x *= 4));
// console.log((x /= 2));
// console.log((x %= 3));
// console.log(typeof x);

// //условные конструкции

// var age = 17;

// var age2 = prompt("введите число");
// console.log("age2:", age2);
// console.log("age2:", typeof age2);

//  if (1010 >= 1000) {
//     console.log("Вы бессмертный");
//   } else {
//     console.log("Вы совершеннолетний");
//   }

// console.log(1010<1000 ? "Вы бессмертный" : "Вы совершеннолетний");

// var color = 'зеленый'

// console.log(color === 'красный' ? 'da' : 'net');

//null

// if (age2 >= 1000) {
//   console.log("Вы бессмертный");
// } else if (age2 >= 18) {
//   console.log("Вы совершеннолетний");
// } else if (age2 > 0) {
//   console.log("Вы не совершеннолетний");
// } else {
//   console.log("Вы не правильно указали возраст");
// }

//undefined
// var surname

// console.log(surname ,' surname');

// surname = 15
// console.log(surname ,' surname');

// var result
// var age = prompt("введите число");
// console.log(typeof age ,' surname');

// switch (true) {
//   case Number(age) >= 1000 : result = ("Вы бессмертный");
//  break;
//   case Number(age) >= 18 : result =("Вы совершеннолетний");
//  break;
//   case Number(age) > 0 : result =("Вы не совершеннолетний");
//  break;
//   default: result =("Вы не правильно указали возраст");
// }

// console.log(result);

// var num1 = Number(prompt('Введите первое число'))
// var num2 = Number(prompt('Введите второе число'))
// var operator = prompt('Введите оператор')

// switch (operator) {
//   case '+' :
//     result = num1+num2;
// break;
//   case '-' :
//     result = num1-num2;
// break;
//   case '/' :
//     result = num1/num2;
// break;
//   case '*' :
//     result = num1*num2;
// break;
//   default: result='неверный оператор'
// }

// console.log('result:', result);

var person = 3651351;

// console.log(person === null ? '' : person);

// && ??

// console.log(person && "приходит");

// console.log(person ?? "приходит null");

// var massiv = [1, "string", null, true, 2, 3, 4, 5];

// console.log("massiv:", massiv);
// console.log("massiv:", massiv[1]);
// console.log("massiv:", massiv[5]);
// console.log("massiv:", massiv.length);

// for (var i = 0; i < massiv.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(massiv[i]);
//   }
// }

// var i = 0;

// while (i<massiv.length) {
//   console.log('i:', i);
//   i++
// }

// for (var i=massiv.length-1; i>=0; i--){
//   console.log(massiv[i])
// }

var arr = [1, 2, 3, 4, 5];
// var arr = null;
// var arrPush = arr.push(8)
// var arrPush = arr.push(10)
// var arrPush = arr.pop()
// var arrPush = arr.shift()
// var arrPush = arr.unshift(321)
// arr[2]=999999
console.log(arr);
// console.log(arrPush );

// var a = arr.map(elem=> elem ** 2)
// var a = arr.map((elem) => (elem % 2 === 0 ? elem ** 2 : elem ** 3));

// console.log("a:", a);

// var b = arr.filter((item) => item > 3);
// var c = arr.filter((item) => item % 2 !== 0);
// console.log("b:", b);
// console.log("c:", c);

// var d = arr.reduce((acc, num) => acc + num, 0);
// console.log("d:", d);

// var name = "Bakyt";
// var surname = "Sariev";
// var age = 18;
// var name1 = "Bakyt";
// var surname1 = "Sariev";
// var age1 = 18;

// var person = {
//   name: 'Bakyt',
//   surname: 'Sariev',
//   age: 18,
//   live: true,
//   children: ['Numan', 'Kutman', 'Adelina'],
//   money: null,
//   address: {
//     country: 'KG',
//     city: 'Bishkek',
//     house: 35
//   }
// }

// var person1 = {
//   name: 'Kuban',
//   surname: 'Sariev',
//   age: 18
// }

// console.log('person:', person);
// console.log('name:', person.name);
// console.log('surname:', person.surname);
// console.log('age:', person.age);
// console.log('house:', person.address.house);

var err = arr === null ? 'null' : arr.map(d=> d*5)

console.log('err:', err);

var persons = [
  {
    name: "Baktybek",
    age: 39
  },
  {
    name: "Нургелди",
    age: 28,
  },
  {
    name: "Закир",
    age: 18,
  },
  {
    name: "Айтенир",
    age: 8,
  }
]

var names = persons.map(item=> console.log(item.name))