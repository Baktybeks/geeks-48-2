// console.log("lesoon7");

// var person123 = {
//   name: "Baktybek",
//   "surname asd": "Sariev",
//   age: 18,
//   address: {
//     country: "KG",
//     city: "Bishkek",
//     house: "35",
//   },
// };

// console.log(person123.address.house);
// console.log(person123.name);
// console.log(person123.age);

// var { name, age } = person123;
// var { country, city, house } = person123.address;

// console.log("name:", name);
// console.log("age:", age);
// console.log("country:", country);
// console.log("city:", city);
// console.log("house:", house);

// var arr = [1, 2, 3, 4, 5];

// var arr2 = [11, 21, 32, 43, 54];

// var arr3 = [...arr, ...arr2];
// console.log("arr3:", arr3);

// const user = {
//   name1: "Baktybek",
//   age: 18,
// };

// const updateUser = {
//   ...user,
//   city: "Bishkek",
// };

// console.log(updateUser);

// var [first, , second, , , ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(first);
// console.log(second);
// console.log(rest);
greet();

function greet() {
  return console.log("Привет");
}

// function sum(a, b) {
//   return a;
// }

// console.log(sum(5, 3));

// ("Hello, Bakyt!");

// function greet2(name = "admin") {
//   return console.log(`Hello ${name}`);
// }

// greet2("Kuban");

// function stepen(sifra, stepen) {
//   return sifra ** stepen;
// }

// console.log(stepen(9,3))
// console.log(summ(9999,5555));

// var summ = function(x,y) {
//   return x+y
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avarege = function (arr) {
  console.log("arr:", arr);
  let summm = 10;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    summm += arr[i];
  }
  return summm / arr.length;
};

console.log(avarege(numbers));

// var
// let
// const

let a = 55555;
console.log(a);
a = 10;
console.log(a);

console.log(bbb);

var bbb = 500;

if (10 > 9) {
  let aif = 10;
  var avar = 10;
}
// console.log('aif:', aif);
console.log("avar:", avar);

const greet5 = (a, b) => {
  if (a > b) {
    console.log("а больше");
  }
  return a + b;
};
const greet55 = (a, b) => a + b;
const greet555 = (a) => a ** 3;

const summ = function (x, y) {
  return x + y;
};

console.log(greet5(1000, 200));
console.log(greet555(10));

(function (a, b) {
  console.log(a + b);
})(2, 3);

const obj = {
  greet666(a, b) {
    return a + b;
  },
};

console.log(obj.greet666(9,6));

function calculate(a,b, oper) {
  return oper(a,b)
}

function plus(x,y) {
  return x+y
}
function minus(x,y) {
  return x-y
}
function del(x,y) {
  return x/y
}
function umn(x,y) {
  return x*y
}

console.log(calculate(10,5, plus));
console.log(calculate(10,5, minus));
console.log(calculate(10,5, umn));
console.log(calculate(10,5, del));
