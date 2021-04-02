const mongoose = require('mongoose');
const Url = 'mongodb://localhost:27017/grampara'

mongoose.connect(Url , {useNewUrlParser: true}, { useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!")
});