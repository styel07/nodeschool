var express = require('express')
var app = express()

app.set('view engine', 'jade')
app.set('views',process.argv[3])

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString()
  })
});
//app.use(express.static(process.argv[3]) || path.join(__dirname, 'public'))

app.listen(process.argv[2])