var express = require('express');
var cors = require('cors');
const router = require('./app');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



app.use('/',router);
const port = 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
