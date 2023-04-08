const express = require('express');
const typeorm = require('typeorm');
const app = express();

// Base de datos
var dataSource = new typeorm.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'doctor_pc',
    synchronize: true,
    entities: [
        require('./entities/Roles.js'),
        require('./entities/Users.js'),
        require('./entities/Devices.js'),
        require('./entities/Bouchers.js'),
    ],
})

// Se inicializa la BD y se crean los roles iniciales
dataSource.initialize().then(function () {
    var AdminRol = {
        name: "ADMIN",
    }

    var TechRol = {
        name: "TECH",
    }

    var UserRol = {
        name: "USER",
    }

    var roleRepository = dataSource.getRepository("Roles")
    roleRepository.save(AdminRol);
    roleRepository.save(TechRol);
    roleRepository.save(UserRol);
    }).catch(function (error) {
        console.log("Error: ", error)
});

// Rutas
app.use(require('./routes.js'));

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});