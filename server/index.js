const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send('ram, sham,hari')
  })
  app.get('/porrducts', (req, res) => {
    res.send(' hawakins, baltra')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})