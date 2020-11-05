const request = require('request');



const fetchBreedDescription = function(breedName,callback) {

  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

 
  request(url,(error,response
    ,body)=>{
      
    if (!error) {
    const data = JSON.parse(body);
    // console.log(data)
    const name = data[0];
    if(!name){
      callback(`Breed ${breedName} not found.`, null)
    }else{
      callback(null,name.description)
    }
  }else{
    callback(error,null)
  }
  
  });
};

module.exports = {fetchBreedDescription};
// if !error then data and name if !data callback error breed els callback with desc else callback network error  