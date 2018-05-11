const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static(path.join(__dirname, 'public')))
app.get('/get', function (req, res) {
  res.send('yes');
});

app.post('/data', function (req, res) {
  res.send('5555 post');
});

app.listen(3030, () => {
  console.log(`App listening at port 3030`)
})
