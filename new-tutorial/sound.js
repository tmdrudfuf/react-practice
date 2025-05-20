const express = require('express');
const app = express();
const port = 4000;

app.get('/sound/:name', (req, res) => {
    const {name} = req.params

    if(name == "dog"){
        res.json({sound: "woof"})
        }
    else if(name == "cat"){
        res.json({sound: "meow"})
        }
    else if(name == "bird"){
        res.json({sound: "tweet"})
        }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});