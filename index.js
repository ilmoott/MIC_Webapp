const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('./src/db/mongoose');
const homeRouter = require('./src/routers/home');
const adminRouter = require('./src/routers/admin');
const quotesRouter = require('./src/routers/quotes');
const inventoryRouter = require('./src/routers/inventory');
const passwordRouter = require('./src/routers/requestPassword');


const port = process.env.PORT || 3000;
    //TODO: save the PORT variable to the config.env


const app = express();

//parse JSON inside express
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

//serving static files
app.use(express.static(path.join(__dirname, '/public/')));

//defining view engine
const hbs = exphbs.create();


app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('views', './src/views');
app.set('view engine', '.hbs');

//router
app.use(homeRouter);
app.use(adminRouter);
app.use(quotesRouter);
app.use(inventoryRouter);
app.use(passwordRouter);


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});