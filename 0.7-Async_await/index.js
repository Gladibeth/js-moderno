async function myFunction() {
  return new Promise((resolve, reject) => {
    resolve('Hola mundo');
  })
}

myFunction().then((result => console.log(result)))


function wather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola water')
    })
  },2000)
}
function trafic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola trafic')
    })
  },2000)
}

async function travelPlan() {
 /* wather()
    .then((result) => {
      console.log(result)
      return trafic();
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log('error')
    }) */


   /*  const waterItem = await wather();
    const traficItem = await trafic();
    return [waterItem, traficItem]; */

    const waterItem = wather();
    const traficItem = trafic();
    const plan = await Promise.all([waterItem, traficItem]);
    return plan;

}

travelPlan().then((result) => console.log(result));