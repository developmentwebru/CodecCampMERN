const express = require('express');
const app = express();

const cokieParser = require('cookie-parser')

const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(cokieParser())

// import all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)
//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app