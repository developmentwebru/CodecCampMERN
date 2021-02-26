const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://developer:dsvSDFRE34354@cluster0.33kh6.mongodb.net/shopit', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase