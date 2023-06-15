const express = require('express')
const app = express()
var cors = require('cors')
  app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params
  
  if(name == 'dog'){
    res.json({'sound': '멍멍'})
  } else if(name == 'cat'){
    res.json({'sound': '야옹'})
  } else {
    res.json({'sound':'알수없음'})
  }
})

app.get('/cat', function (req, res) {
  res.send('cat')
})

app.get('/user/:id', (req, res) => {
  // const q = req.params
  // console.log(q.id)
  const q = req.query
  console.log(q)

  
})

app.listen(3000) 