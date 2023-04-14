const name = 'Gladibeth';
const color = 'WHITE';
const ciudad = 'PuntoFijo';
const lenguaje = 'Javascript';



const persona = {
  name,
  color,
  ciudad,
  lenguaje,
  [ciudad + 'CP']: 1000,
  saludar() {
    console.log(`Me llamo ${this.name} me gusta ${this.color}, CODIGO POSTAL ${this.PuntoFijoCP}`)
  }
}

console.log(persona);
console.log(persona.saludar());

const [name2, color2] = Object.values(persona);
console.log(name2, color2);

Object.entries(persona).forEach(([key, value]) => { 
  console.log(`${key} : ${value}`);
})
