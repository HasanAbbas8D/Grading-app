const mongoose = require('mongoose');

const Url = 'mongodb://127.0.0.1:27017/grading';

// mongoose.set('strictQuery', false);

const ConnectToDb = () => {
    mongoose.connect(Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
        console.log('Mongodb connected');
    });

    mongoose.connection.on('error', (err) => {
        console.error(err, 'Mongodb connection error');
    });
}

module.exports = ConnectToDb;
