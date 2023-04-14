const url = 'https://jsonplaceholder.typicode.com/posts';

//fetch(url, options)

fetch(url)
    /* .then((response) => {
      console.log(response.headers.get('Content-Type'));
      for(const [key, value] of response.headers){
        console.log(key + ': ' + value);
      }
      return response.json();
    }) */
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))



const payload = {
  id: 12,
  title: 'gladibeth'
}

const options = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(payload)
}


fetch(url, options)
      .then((response) => response.json())