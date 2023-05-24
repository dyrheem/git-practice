const express = require('express')
const app = express()
const port = 3000


app.get(`/sound/:name`, (req, res) => {
  // const q = req.params ;
  // console.log(q.id) ;
  const {name} = req.params ;
  console.log(name) ;

  if(name === 'dog') {
  res.json({'sound':'멍멍'})
  } else if(name === 'cat') {
  res.json({'sound':'야옹'})
  }

})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)})