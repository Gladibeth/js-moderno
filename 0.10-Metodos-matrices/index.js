// array.from

const text = 'Hola mundo';
console.log(Array.from(text));


/* const list = Array.from(document.querySelectorAll('li'));
const listMap = list.map(element => element.textContent); */

/* console.log(list);
console.log(listMap); */

const listMapeada = Array.from(document.querySelectorAll('li'), element => element.textContent);
console.log(listMapeada);


function sum (a, b,c,d,e,f) {
  console.log(Array.from(arguments).reduce((acc,item) => acc + item,0));
}

sum(1, 2, 3, 4, 5, 6);