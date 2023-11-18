const express = require('express')
const app = express()
const port = 5000
require('dotenv').config({path:'.env'});
const mongoDB = require("./db")
mongoDB();

const user = require("./routes/user");
const courses = require("./routes/courses");


app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', courses);
app.use('/api', user);


app.listen(port, () => {
  console.log(`Listening app on port ${port}`)
})