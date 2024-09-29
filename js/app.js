//if 1
// let userNumber = +prompt("Sonni kiriting");
// let answer;
// if (userNumber > 0) {
//   userNumber = "Musbat son";
// } else if (userNumber < 0) {
//   userNumber = userNumber - 1;
// }
// console.log(userNumber);
// alert("Javob:" + userNumber);
//if 2
// let userNumber = +prompt("Son kiriting!");
// if (userNumber > 0) {
//   userNumber = userNumber + 1;
// } else if (userNumber < 0) {
//   userNumber = userNumber / 2;
// }
// alert("Javob:" + userNumber);
// console.log("Javob:" + userNumber);
//if 3
// let userNumber = +prompt("Son kiriting!");
// if (userNumber > 0) {
//   userNumber = userNumber + 1;
// } else if (userNumber < 0) {
//   userNumber = userNumber / 2;
// }
// if (userNumber === 0) {
//   userNumber = userNumber + 10;

// }
// alert("Javob:" + userNumber);
//if 4
// let userNumber1 = +prompt("Birinchi sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let result = 0;
// if (userNumber1 > 0) {
//   result = result + 1;
// }
// if (userNumber2 > 0) {
//   result = result + 1;
// }
// if (userNumber3 > 0) {
//   result = result + 1;
// }
// alert("Musbat sonlar yig'indisi:" + result);
//if 5
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let musbat = 0;
// let manfiy = 0;
// let result = 0;
// if (userNumber1 > 0) {
//   result = result + 1;
// }
// if (userNumber2 > 0) {
//   result = result + 1;
// }
// if (userNumber3 > 0) {
//   result = result + 1;
// }
// if (userNumber1 < 0) {
//   manfiy = manfiy + 1;
// }
// if (userNumber2 < 0) {
//   manfiy = manfiy + 1;
// }
// if (userNumber3 < 0) {
//   manfiy = manfiy + 1;
// }
// alert("Manfiy sonlar yig'indisi:" + manfiy);
// alert("Musbat sonlar yig'indisi:" + result);
//if 6
// let userNumber1 = +prompt("Birinchi kiriting!");
// let userNumber2 = +prompt("Ikkinchi sonni kiriting!");
// if (userNumber1 > userNumber2) {
//   alert(userNumber1);
// } else {
//   alert(userNumber2);
// }
// if 7
// let son1 = parseInt(prompt("1-sonni kiriting:"));
// let son2 = parseInt(prompt("2-sonni kiriting:"));
// if (son1 < son2) {
//   console.log("Kichik sonning tartib raqami: 1");
//   alert("Kichik sonning tartib raqami: 1 :" + son1);
// } else if (son2 < son1) {
//   alert("Kichik sonning tartib raqami: 2 :" + son2);
//   console.log("Kichik sonning tartib raqami: 2");
// } else {
//   console.log("Ikkala son teng.");
// }
// if 8
// let userNumber1 = +prompt("Birinchi sonni kiriting!");
// let userNumber2 = +prompt("Ikkinchi sonni kiriting!");
// if (userNumber1 > userNumber2) {
//   alert("Kattasi:" + userNumber1 + "  " + "Kichigi:" + userNumber2);
// } else if (userNumber2 > userNumber1) {
//   alert("Kattasi:" + userNumber2 + "  " + "Kichigi:" + userNumber1);
// }
// if 9
// let num_if9$1 = +prompt("birinchi sonni kiriting");
// let num_if9$2 = +prompt("ikkinchi sonni kiriting");

// if (num_if9$1 > num_if9$2) {
//     alert(`A soni: ${num_if9$2}, B soni: ${num_if9$1}`)
// } else {
//     alert(`A soni: ${num_if9$1},B soni: ${num_if9$2}`)
// }
// let res_if9 = num_if9$1 + num_if9$2

// alert(`Yig'indisi: ${res_if9}`)
//if 10
// let userNumberA = +prompt("A sonini kiriting!");
// let userNumberB = +prompt("B sonini kiriting!");
// let res;
// if (userNumberA > userNumberB) {
//   res = userNumberA + userNumberB;
// } else if (userNumberB > userNumberA) {
//   res = userNumberB + userNumberA;
// } else if (userNumberA == userNumberB) {
//   (res = userNumberA), userNumberB + 0;
// }
// alert(res);
// if 11
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let res;
// if (userNumber1 < userNumber2) {
//   res = userNumber2;
//   alert(userNumber2);
// } else if (userNumber2 < userNumber1) {
//   res = userNumber1;
//   alert(userNumber1);
// }
// if (userNumber1 == userNumber2) {
//   res = 0;
// }
// alert(res);
// if 12
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let max;
// if (userNumber1 < userNumber2 && userNumber1 < userNumber3) {
//   max = userNumber1;
// } else if (userNumber2 < userNumber1 && userNumber2 < userNumber3) {
//   max = userNumber2;
// } else {
//   max = userNumber3;
// }
// alert("Eng kichik son -->" + max);
// if 13
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let medium;
// if (
//   (userNumber1 > userNumber2 && userNumber1 < userNumber3) ||
//   (userNumber1 < userNumber2 && userNumber1 > userNumber3)
// ) {
//   medium = userNumber1;
// }
// if (
//   (userNumber2 > userNumber1 && userNumber2 < userNumber3) ||
//   (userNumber2 < userNumber1 && userNumber2 < userNumber3)
// ) {
//   medium = userNumber2;
// }
// if (
//   (userNumber3 < userNumber1 && userNumber3 > userNumber2) ||
//   (userNumber3 > userNumber1 && userNumber3 < userNumber2)
// ) {
//   medium = userNumber3;
// }
// alert(medium);
// if 14
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let min;
// let max;
// if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
//   max = userNumber1;
// } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
//   max = userNumber2;
// } else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) {
//   max = userNumber3;
// }
// alert("Eng katta son --> " + max);
// if (userNumber1 < userNumber2 && userNumber1 < userNumber3) {
//   min = userNumber1;
// } else if (userNumber2 < userNumber1 && userNumber2 < userNumber3) {
//   min = userNumber2;
// } else if (userNumber3 < userNumber1 && userNumber3 < userNumber2) {
//   min = userNumber3;
// }
// alert("Eng kichik son --> " + min);
// if 15
// let userNumber1 = +prompt("1-sonni kiriting");
// let userNumber2 = +prompt("2-sonni kiriting");
// let userNumber3 = +prompt("3-sonni kiriting");
// let max;
// let res = userNumber1 + userNumber2 + userNumber3;
// alert("Sonlar yig'indisi -->  " + res);
// if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
//   max = userNumber1;
// } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
//   max = userNumber2;
// } else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) {
//   max = userNumber3;
// }
// alert("Sonlarning eng kattasi -->  " + max);
// boolean 1
// let userNumberA = +prompt("A sonini kiriting!");
// let res;
// if (userNumberA > 0) {
//   alert("Siz kiritgan musbat!");
//   console.log(true);
// } else {
//   alert("Siz kiritgan manfiy!");
//   console.log(false);
// }
// boolean 2
// let userNumberA = +prompt("A sonini kiriting!");
// let res;
// if (userNumberA % 2 == 1) {
//   console.log(true);
//   alert("Siz kiritgan son toq!");
// } else {
//   console.log(false);
//   alert("Siz kiritgan son juft!");
// }
// boolean 3
// let userNumberA = +prompt("A sonini kiriting!");
// if (userNumberA % 2 == 0) {
//   console.log(true);
//   alert("Bu juft son");
// } else {
//   console.log(false);
//   alert("Bu toq son");
// }
// boolean 4
// let userNumberA = +prompt("A sonini kiriting!");
// let userNumberB = +prompt("B sonini kiriting!");
// if (userNumberA > 2 && userNumberB <= 3) {
//   console.log(true);
//   alert(true);
// } else {
//   console.log(false);
//   alert(false);
// }
// boolean 5
// let userNumberA = +prompt("A sonini kiriiting");
// let userNumberB = +prompt("B sonini kiriiting");
// if (userNumberA >= 0 && userNumberB < -2) {
//   console.log(true);
//   alert("To'g'ri" + true);
// } else {
//   console.log(false);
//   alert("Notog'ri  " + false);
// }
// bolean 6
// let userNumberA = +prompt("A sonini kiriting!");
// let userNumberB = +prompt("B sonini kiriting!");
// let userNumberc = +prompt("C sonini kiriting!");
// if (userNumberA <= userNumberB <= userNumberc) {
//   console.log(true);
//   alert(true);
// } else {
//   console.log(false);
//   alert(false);
// }
// alert("Keyingisi boolean-7 ");
// boolean 7
// let userNumberA = +prompt("A sonini kiriting!");
// let userNumberB = +prompt("B sonini kiriting!");
// let userNumberC = +prompt("C sonini kiriting!");
// alert(`${userNumberB}, ${userNumberA} va ${userNumberC}ning orasida turipti!`);
// boolean 8
// let userNumberA = +prompt("A sonini kiriting");
// let userNumberB = +prompt("B sonini kiriting");
// if (userNumberA % 2 == 0) {
//   console.log("A soni toq emas " + false);
// }
// if (userNumberB % 2 == 0) {
//   console.log("B soni toq emas " + false);
// } else if (userNumberA % 2 == 1) {
//   console.log("A soni toq --> " + true);
// }
// if (userNumberB % 2 == 1) {
//   console.log("B soni toq --> " + true);
// }
// boolean 9
// let userNumberA = +prompt("A sonini kiriting");
// let userNumberB = +prompt("B sonini kiriting");
// if (userNumberA % 2 == 1) {
//   console.log("A soni toq!");
//   alert("A soni toq!");
// }
// if (userNumberB % 2 == 1) {
//   console.log("B soni toq!");
//   alert("B soni toq!");
// }
// if (userNumberA % 2 == 0) {
//   console.log("A soni toq emas! ");
//   alert("A soni toq emas!");
// }
// if (userNumberB % 2 == 0) {
//   console.log("B soni toq emas!");
//   alert("B soni toq emas!");
// }
// boolean 10
// let userNumberA = +prompt("A sonini kiriting!");
// let userNumberB = +prompt("B sonini kiriting!");
// if (userNumberA % 2 == 1) {
//   console.log("A son toq");
//   alert("A son toq");
// }
// if (userNumberA % 2 == 0) {
//   console.log("A soni toq emas");
//   alert("A soni toq emas");
// }
// if (userNumberB == 0) {
//   console.log("B soni toq emas");
//   alert("B soni toq emas");
// }
// if (userNumberB % 2 == 1) {
//   alert("B soni toq");
//   console.log("B soni toq");
// }
// if ((userNumberA, userNumberB % 2 == 1)) {
//   console.log("Ikkalasiyam toq");
//   alert("Ikkalasiyam toq");
// }
// katta masala
let alisherMoney = +prompt("Pulingizni somda kiriting!");
let cost = 9732480;
if (alisherMoney > cost) {
  console.log("Oq yo'l Alisher");
  alert("Oq yo'l Alisher!");
} else {
  console.log("Alisher ozgina sabr qilishga to'g'ri kelar ekan");
  alert("Alisher ozgina sabr qilishga to'g'ri kelar ekan");
}
