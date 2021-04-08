const express = require('express');
const app = express();
const port = 5555;
const db = require('./database/config.js');
const routes = require('./database/routers/index.js');
var cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/gram-para'));
app.use('/admin',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/singin',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/register',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/cart/payment',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/admin/products',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/admin/addProduct',express.static(__dirname + '/../client/dist/gram-para'));
app.use('/cart/ordercomplete',express.static(__dirname + '/../client/dist/gram-para'));


app.use('/product', routes.product);
app.use('/user', routes.user);
app.use('/session', routes.session);
app.use('/ordres', routes.ordres);
app.use('/newsLetter', routes.newsLetter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
