const request = require('request');

let args = process.argv.slice(2);
let name = args[0];
let url = 'https://api.tecatapi.com/v1/breeds/search?q=' + name;

request.get(url,(error,response
,body)=>{
  if(error){
    console.log(error);
    }
    else{
  let data = JSON.parse(body);
//console.log(data)
if (data.length === 0){
  console.log(' Breed not found')
  
}else{
console.log(data[0].description);
}
    } 
})