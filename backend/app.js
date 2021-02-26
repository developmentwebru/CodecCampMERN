const express = require('express');
const app = express();
var cors = require('cors')
const cokieParser = require('cookie-parser')
const bodyparser = require('body-parser')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors')

//Setting up config file
dotenv.config({ path: 'backend/config/config.env' })
app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cokieParser())
app.use(fileUpload())
//app.use(fileUpload());


// import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const payment = require('./routes/payment')
const order = require('./routes/order')

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)
//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app