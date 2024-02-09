const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const app = express()
const dataRoutes = require("./routes/routes")
const bodyparser = require('body-parser')

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyparser.json());

mongoose.connect("mongodb+srv://dhiyanesh7338942092:prWVZ0Fu2UaCnCZx@cluster0.lrhrmsp.mongodb.net/")

app.use('/',dataRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})

//prWVZ0Fu2UaCnCZx