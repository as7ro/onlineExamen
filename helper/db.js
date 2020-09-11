const mongoose = require('mongoose'); // modulu daxil etmek

module.exports = () => {
    mongoose.connect('mongodb://localhost/prosinaq', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    }) // mongo db nin yolunu gostermek

    mongoose.connection.on('open', () => {
        console.log('mongodb e qosuldu');  // qosulmagini bilmek 
    });

    mongoose.connection.on('error', (err) => {
        console.log('mongo db e qosulammadi', err); // qosulmadisa erroru gormek
    });


    mongoose.Promise = global.Promise;
}