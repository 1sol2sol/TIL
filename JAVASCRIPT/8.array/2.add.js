const fruits = ["π", "π", "π", "π"];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°,μ­μ  - μ’μ§ μμ λ°©μ!
// const fruits = ["π", "π", "π", "π"];
fruits[6] = "π";
console.log(fruits);

delete fruits[1];
// [ 'π', <1 empty item>, 'π', 'π', <2 empty items>, 'π' ] μ­μ λ κ³΅κ°μ΄ emptyλ‘ λ¨μμμ
console.log(fruits);
