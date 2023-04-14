const myColors = ['amarillo', 'verde'];

const colors = new Set(myColors);
colors.add('Azul');
colors.add('morado')

//no permite duplicado
colors.add('morado')
colors.add('morado')


console.log(colors)
console.log(colors.has('amarillo'))
console.log(colors.size)
console.log(colors.delete('morado'));
console.log(colors.size)
console.log(colors)

// .clear, value, 

const users = ['Yonnys', 'estrella', 'Gladibeth'];

const userVisite = new Set();

function randomVisite(){
  const userRandomVisite = Math.floor(Math.random() * users.length);
  const user = users[userRandomVisite];
  userVisite.has(user) && console.log(`El usuario ${user} visited`);
  userVisite.add(user);

  console.log(userVisite);

  if(userVisite.size === users.length){
    console.log(`Todos los usuarios visitaron la pagina`)
    clearInterval(interval);
    userVisite.clear;
  }
}

const interval = setInterval(randomVisite, 300)
