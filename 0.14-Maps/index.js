const map = new Map();

map.set(1, 'Number')
map.set('1', 'String')
map.set(true, 'Bolleano')

console.log(map)

console.log(map.get(1))
console.log(map.has(1))
console.log(map.size)

const person ={
  name: 'John',
  age: 23
}

const personMap = new Map(Object.entries(person));
console.log(personMap)

const personMap2 = Object.fromEntries(personMap)
console.log(personMap2)


let juan ={name: 'Juan', }, gladibethan = {name: 'gladibethan'}
const admins = new Map();


admins
    .set(juan, 'Supervisor')
    .set(gladibethan, 'Administrator')

console.log(admins)

function doAdmin(user){
  if(admins.has(user)){
    console.log(`El usuario: ${user.name} es ${admins.get(user)}`);
  }else{
    console.log(`El usuario no existe`);
  }
}

doAdmin(gladibethan);