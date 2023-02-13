require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const dbUser = process.env.DB_USUARIO;
const dbPass = process.env.DB_SENHA;

app.use(express.json());

const personRoutes = require("./routes/userRoute");
const catalogRoutes = require("./routes/catalogRoute");

app.use('/login', personRoutes);
app.use('/catalogo', catalogRoutes);

mongoose
.connect(
    `mongodb+srv://${dbUser}:${dbPass}@catalogo0.ljxp8pg.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(8080)

        console.log('      -----CONECTADO---')
    })

