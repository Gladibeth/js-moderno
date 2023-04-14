// spred
const numbers = [1,2,3,4];
console.log(...numbers);

const text = 'Hello world!';
console.log(...text);

function sumar(a, b, c,d) {
  return a + b + c + d;
}

console.log(sumar(...numbers));

const copia  = [...numbers];
copia.push(...copia);
console.log(...copia);


//obj
const person = {
  name: 'John',
  age: 34,
  lastname: 'Smith',
}

const otherPerson = {
  ...person,
  name: 'Other',
}

console.log(otherPerson);
//rest
function rest(...argumentos) {
  return argumentos.reduce((a, b) => a + b);
}
console.log(rest(...numbers, ...copia));
