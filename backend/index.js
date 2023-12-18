const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config({path:'.env'});
require("./db")();

const user = require("./routes/user");
const courses = require("./routes/courses");

const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', courses);
app.use('/api', user);


app.listen(port, () => {
  console.log(`Listening app on port ${port}`)
})