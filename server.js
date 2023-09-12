// here we create the server by the help  of the express js
// node frameworks
const express = require('express')
const app = express()
const PORT = process.env.PORT ||8080;


app.get('/', (req,res)=>{
  res.send("this is ashutosh kumar singh ");
})




app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});


// express support the middleware 
// this work like a filer 
// middle ware just like a fuction 
// whenenver we want to use the middle ware we use the use kewywords 
