function greeting(){
  var name = 'Gladibeth';

  return function(){
    //closure
    console.log(name);
  }
}
greeting()();