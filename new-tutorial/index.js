var figlet = require('figlet');

figlet('This is Ky from Korea!!', function(err, data) {
  if (err) {
    console.log('Somthing went wrong...');
    console.dir(err);
    return;
  } 
  console.log(data)
}); 