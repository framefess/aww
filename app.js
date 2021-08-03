const express = require('express');
require('babel-register');
var cors = require('cors')
const app = express();
const port = 6336;

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); 
  res.render("index", {});
});

app.listen(port, () => {
  console.log("Starting Server. port "+port);
  console.log("http://localhost:"+port);
});
