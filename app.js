const app = require('express')();
const routes = require('./router/routes');
const bodyParser = require('body-parsr');
// var hbs = require('hbs');
var hbs = require('express3-handlebars');


//set handle-bars as view template

app.set('views',__dirname+'/views');
app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine','hbs');

app.use(bodyParser);
app.use('/',routes);
app.use('/a',routes);
app.listen(3000,() =>{
  console.log('Now we are listening on 3000');
});
