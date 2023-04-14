//declarada
function hello(name){
  console.log(`Su nombre es${name}`);
}

//expresion
const hello2 = function (name) {
  console.log(`Su nombre es${name}`);
}


//arrow functions
const hello3 = (name) => {
  console.log(`Su nombre es${name}`);
}

const double = num => num * 2;

const quadruple = num => {
  let value = double(2);
  return value * 2
}

console.log(quadruple(2))

// no tienen this