// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connecting successfully....');
    } catch (error) {
        console.log('Connecting failed .....');
    }
}

module.exports = { connect };
