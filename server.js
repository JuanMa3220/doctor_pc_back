const express = require('express');
const app = express();

//Routes
app.use(require('./routes.js'));

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});