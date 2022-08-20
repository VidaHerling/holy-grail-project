const express = require('express');
const app = express();

// serve static files from public directory
app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.send("Hello World");
})

app.listen(3000, () => {
  console.log("Running on Port 3000.")
})