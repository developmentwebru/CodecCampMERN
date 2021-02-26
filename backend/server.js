const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');
const cloudinary = require('cloudinary')

//Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down server due to uncaught exception')
    process.exit(1)
})

//Setting up config file
dotenv.config({ path: 'backend/config/config.env' })

// Conntecting to database
connectDatabase();

//setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APY_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${.PORT} in ${process.env.NODE_ENV} mode.D:\\node\\CodingBootcamp\\shopit\\backend\
\server.js`)
})

//Handle Unhandle Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`)
    console.log('Shutting down the server due to Unhandled Promise')
    server.close(() => {
        process.exit(1)
    })
})