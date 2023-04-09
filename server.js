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
    var adminRol = {
        id: 1,
        name: "ADMIN",
    }

    var techRol = {
        id: 2,
        name: "TECH",
    }

    var userRol = {
        id: 3,
        name: "USER",
    }

    var roleRepository = dataSource.getRepository("Roles")
    roleRepository.save(adminRol);
    roleRepository.save(techRol);
    roleRepository.save(userRol);

    var adminUser = {
        id: 1,
        name: "admin",
        phone: "1234567890",
        document: "1234",
        password: "1234",
        roles: 1
    }

    var userRepository = dataSource.getRepository("Users")

    userRepository.save(adminUser)

    }).catch(function (error) {
        console.log("Error: ", error)
});

module.exports = dataSource

// para poder parsear application/json
app.use(express.json());

// Rutas
app.use(require('./routes.js'));

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});