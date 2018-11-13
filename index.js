const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const app = express();//Inicializa express. app será la manejada
const routes = require('./routes'); //Requeriendo rutas
const api = require('./api');

//Settings = Agregar variables
app.set('appName', 'My first server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('author', 'Luis Fuentes');

//Middlewares. use() es para middleware
app.use(morgan('dev'));

//Recibe las peticiones con get('lo que recibimos',)
app.use(routes);
app.use('/api',api);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
})

app.listen(3000, () => {
    console.log('Server is working on port 3000'.cyan);
    console.log('App\'s name:', app.get('appName').cyan);
});