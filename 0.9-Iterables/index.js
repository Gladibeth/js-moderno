//FOR OF

const colors = ['amarillo', 'verde', 'azul'];

for(let color of colors) {
  console.log(color);
}

const iterable = colors[Symbol.iterator]();

const person = {
  name: 'gladibeth',
  age: 25
}

for(let [key,value] of Object.entries(person)){
  console.log(key,value);
}


const aprender = {
  vue: ['vue3', 'nuxt', 'grindsome'],
  js: ['esnext', 'patterns', 'testing'],
  css: ['tailwing', 'bem', 'subgrid'],
}

aprender[Symbol.iterator] = function (){
  let indexTec  = 0;
  let indexHer = 0;
  const tecnologias = Object.values(this);

  return{
    next(){
      const tecnologia = tecnologias[indexTec];

      if(!(indexHer < tecnologias.length)){
        indexTec++;
        indexHer = 0;
      }

      if(!(indexTec < tecnologias.length)){
        return{
          value: undefined,
          done: true
        }
      }



      return {
        value: tecnologia[indexHer++],
        dona:false,
      }
    }
  }

}

for(let herramienta of aprender){
  console.log(herramienta)
}