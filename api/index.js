const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
port = process.env.APP_PORT;

const currentDirectory = __dirname;
const buildDirectory = path.join(currentDirectory, 'build');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

// imports routes
const auth = require('./routes/auth');
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');

app.use(express.static(buildDirectory));

app.get('/', (req, res)=>{
    res.send({message: 'Ok from the server side'});
});

// routes
app.use('/api/auth', auth);
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);



app.listen(port, ()=>{
    console.log(`my app is running on ${port}`);
})