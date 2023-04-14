function randomNumber(){
  return Math.floor(Math.random() * 2) + 1
}

function suma(a = 2, b = randomNumber()) {
  return a + b; 
}

/* console.log(suma(1,2)) */
console.log(suma(1))
console.log(suma(undefined, 1));