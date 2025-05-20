const express = require('express')
const app = express()
const port =3000

app.get('/', (req, res) => {

   /*
    app.get('/', () => {})
    HTTP method ('routing, callback function)  
    purpose of HTTP method:
    notify the purpose and type of request(get/post)
    routing: 
    it is the name of page (\, \main, \about) that the programmer want to call
    callback function: 
    this function is called after the prior function is done
    */
  res.send('Hello World! this is ky from korea')
})
app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.get('/dog',(req,res)=>{
  res.send('<h1>bark!</h1>')
})
app.get('/cat',(req,res)=>{
  res.send('Meow!')
}) 
//make the routing as parameter for userID
// app.get('/user/:id', (req, res) => {
//   const q = req.params
//   console.log(q)

//   res.json({'id':q.id })
// })
//make the routing as query for 
app.get('/user/:id', (req, res) => {
  const q = req.query
  console.log(q.q)
  console.log(q.name)
  console.log(q.age)


  res.json({'id':q.id })
})



app.listen(port, () => {
  //listen: open the server for the page
  console.log(`Example app listening on port ${port}`)
   /*what is the port for?
   like usb port on the laptop, each port has special type of port that they accept. 
   like this the port in the code need special number for the port
   so developer can organize and categorize
   I can install or run different program with different port
   */
  

})  