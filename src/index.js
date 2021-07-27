const express       = require('express');
const morgan        = require('morgan');
const handlebars    = require('express-handlebars');
const path          = require('path');

const app           = express();
const port          = 3000

/**
 ******* SET FOLDER PUBLIC - STATIC FILE *********************
 * 
*/
app.use(express.static(path.join(__dirname, 'public')));

/**
 ******* HTTP LOGGER DEBUG *********************
 * 
*/
app.use(morgan('combined'));

/**
 ******* TEMPLATE ENGINE *********************
 * 
*/
app.engine('hbs', handlebars({ 
    extname: ".hbs"
})); // config extension name
app.set('view engine', 'hbs'); // view engine use handlebars template
app.set('views', path.join(__dirname, 'resources/views')); // config view engine

/**
 ******* ROUTER *********************
 * 
*/
app.get('/', (req, res) => res.render('home') ); // route home page
app.get('/news', (req, res) => res.render('news') ); // route news page


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`) // gọi port được định nghãi khi khởi chạy
})