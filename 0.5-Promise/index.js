const buy = new Promise((resolve, reject) => {
  //resolve('Aprobado');
  reject(new Error('Esto es un error'));
})

buy
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(console.log('Proceso terminado'));

const payFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    Promise.race([paypal, amex]).then((paymer) => {
      resolve(
        {
          done: true,
          customerId: 12345,
          paymer
        }
      )
    })
  },300)
});

const paypal = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('paypal')
  }, 300)
})

const amex = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('amex')
  }, 200)
})

const getTransport = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      bikerId: 09876,
      distance: 3000
    });
  },5000)
})

function deliverFood(){
  //then flow 
 /*  payFood
    .then((payInfo) => {
      console.log(payInfo);
      return getTransport;
    })
    .then((riderInfo) => {
      let {bikerId, distance } = riderInfo;
      console.log(`${bikerId} viene en ${distance}`)
    })
    .finally(() =>{
      console.log('Comida entregada')
    }) */


  // the all

  Promise.all([payFood, getTransport])
      .then((result) => console.log(result))
      .catch((err) => console.log(error))
}


deliverFood();