require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors");



const dbUser = process.env.DB_USUARIO;
const dbPass = process.env.DB_SENHA;

app.use(express.json());
app.use(cors({origin: ['http://127.0.0.1:5500', 'http://localhost:52330/'], credentials: true}))


const personRoutes = require("./routes/userRoute");
const catalogRoutes = require("./routes/catalogRoute");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT');
  res.header('Access-Control-Max-Age: 86400');
  res.header('Access-Control-Allow-Credentials', true)

  next()
})
app.use('/login', personRoutes);
app.use('/catalogo', catalogRoutes);

mongoose
.connect(
    `mongodb+srv://${dbUser}:${dbPass}@catalogo0.ljxp8pg.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(8080)

        console.log('      -----CONECTADO---    ')
    })

