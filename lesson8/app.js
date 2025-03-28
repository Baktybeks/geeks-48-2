console.log("lesson8");

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(5, 6));

// const relative = {
//   name: "Viktor",
//   children: [
//     {
//       name: "Misha",
//       children: [
//         {
//           name: "Sasha",
//           children: [
//             {
//               name: "Kesha",
//               children: [
//                 {
//                   name: "Kesha1",
//                   children: [],
//                 },
//                 {
//                   name: "Kesha2",
//                   children: [
//                     {
//                       name: "Kesha22",
//                       children: [],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const relative1 = null;

// for (const child of relative.children) {
//   console.log("child:", child.name);
//   for (const child1 of child.children) {
//     console.log("child:", child1.name);
//     for (const child2 of child1.children) {
//       console.log("child:", child2.name);
//       for (const child3 of child2.children) {
//         console.log("child:", child3.name);
//         for (const child4 of child3.children) {
//           console.log("child:", child4.name);
//         }
//       }
//     }
//   }
// }

// function showParentChild(obj) {
//   obj.children.forEach((child) => {
//     console.log(`${obj.name} => ${child.name}`);
//     showParentChild(child);
//   });
// }

// showParentChild(relative);
// showParentChild(relative1);

function createCounter() {
  let count = 0;
  console.log(count);

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

function bankAccount(init) {
  let balance = init;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Пополнение на ${amount}. Баланс = ${balance}`);
    },
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        console.log(`Снятие на ${amount}. Баланс = ${balance}`);
      } else {
        console.log("Недостаточно средств");
      }
    },
    getBalance() {
      console.log(`Баланс = ${balance}`);
    },
  };
}

const myAccount = bankAccount(16000)
myAccount.deposit(2000)
myAccount.deposit(2000)
myAccount.deposit(2000)
myAccount.withdraw(22000)
myAccount.withdraw(22000)
myAccount.getBalance()

const str = "кыргызстан"

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str3 = str.slice(0,3)
let str4 = str.slice(0,1)
let str5 = str.slice(1,str.length)
let str6 = str.slice(-1)
console.log(str3)
console.log(str4)
console.log(str5)
console.log(str6)

console.log(str.slice(0,1).toUpperCase()+str.slice(1,str.length));
console.log(str.slice(0,1).toUpperCase()+str.slice(1,str.length-1)+str.slice(-1).toUpperCase());

const a = 9.8

console.log(Math.round(9.5));
console.log(Math.round(9.3));
console.log(Math.round(9.8));
console.log(Math.ceil(9.2));
console.log(Math.floor(9.8));

console.log((9.5654651321351361351351351).toFixed(3));

console.log(str.indexOf('г'));
console.log(str[str.indexOf('г')].toUpperCase());

str.indexOf('г')

console.log(str.replace("ы", "Г;k;lk"));

const name = "Bakyt"
const name1= "bAKYT"

console.log(name.toLowerCase()===name1.toLowerCase());

