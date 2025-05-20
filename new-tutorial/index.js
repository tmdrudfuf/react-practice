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