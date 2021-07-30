const express       = require('express');
const morgan        = require('morgan');
const handlebars    = require('express-handlebars');
const path          = require('path');
const app           = express();
const port          = 3000;
const route         = require('./routes')
/**
 ******* SET FOLDER PUBLIC - STATIC FILE *********************
 * use là tạo ra 1 cái rule nhưng không phải  là route
*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/**
 ******* HTTP LOGGER DEBUG *********************
 * 
*/
app.use(morgan('combined'));

/**
 ******* TEMPLATE ENGINE *********************
 * 
*/
app.engine('hbs', handlebars({ extname: ".hbs" })); // config extension name
app.set('view engine', 'hbs'); // view engine use handlebars template
app.set('views', path.join(__dirname, 'resources/views')); // config view engine

/**
 ******* ROUTERS INIT *********************
 * 
*/
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`) // gọi port được định nghãi khi khởi chạy
})