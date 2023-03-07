/* REQUIRE STATEMENTS */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./controllers/routes/routes');
const app = express();
const port = 8080;


/* CONNECT TO MONGO AND RUN SERVER */
const connectionString = process.env.CONNECTION_STRING;
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
    app.listen(port); 
    console.log(`Connected to Mongo: Launching server at ${port}`);
})
.catch((err) => { console.log(`There has been an error connecting to MongoDB: ${err} | ,
Server not luanched..`); })


/* SETTING VIEW ENGINE AND STATIC FILES */
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true} ));


/* ROUTES */
app.get('/', (req, res) => { res.render('index') });

app.use('/', routes);

app.get('404', (req, res) => { res.render('404') })
