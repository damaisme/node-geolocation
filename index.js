const express = require('express')
const app = express()
const port = 5080

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.table({
    mapsLink: `https://maps.google.com/?q=${req.body.latitude},${req.body.longtitude}`,
    browserInfo: req.body.browserInfo
  })
  res.send('success')
})

app.listen(port, () => {
  console.log(`node-geolocation listening on port ${port}`)
})
