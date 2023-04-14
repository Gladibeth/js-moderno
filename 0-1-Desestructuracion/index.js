// array
const fruit = ['lemon', 'orange', 'apple'];

const [lemon, orange, apple] = fruit;
console.log(lemon, orange,apple);

//String
const address = 'Creolandia, calle libertador, estado falcon, Venezuela';
const [sector, calle, estado, pais] = address.split(', ');
console.log(sector, calle,estado,pais);

// Obj
const person = {
  name: 'John',
  age: 34,
  addresses: 'Punto fijo'
}


const {name,age,addresses} = person;
console.log(name,age,addresses)

//Function
function meeting ({name,age=20,addresses}){
  return `Hola ${name} ${age} ${addresses}`;
}

console.log(meeting({
  name: 'John',
  addresses: 'Punto fijo',
}))