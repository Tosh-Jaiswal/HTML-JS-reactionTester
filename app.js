const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())

const frontendRoute = require('./routes/frontEnd')

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))


app.use(frontendRoute);


app.listen(port, () =>{
    console.log("Server is up on port "+port)
  });