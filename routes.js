const { Router } = require('express');
const router = Router();

var dataSource = require("./server")

router.post('/register', (req, res) => {
    let userRepository = dataSource.getRepository("Users");
    let newUser = {
        name: req.body.name,
        phone: req.body.phone,
        document: req.body.document,
        password: req.body.password,
        roles: 3
    };
    userRepository.save(newUser);
    res.json({"Exito": "El usuario ha sido creado exitosamente"});
})

router.post('/login', async (req, res) => {    
    let userRepository = dataSource.getRepository("Users");
    let user = {
        document: req.body.document,
        password: req.body.password
    };

    let dbUser = await userRepository.findOneBy({
        document: user.document,
        password: user.password
    });

    if (dbUser) return res.json({"Exito": "El usuario ha sido autenticado"});
    res.json({"Error": "Usuario o contraseña incorrecto"});
});

router.get('/devices/all', async (req, res) => {
    let deviceRepository = dataSource.getRepository("Devices");
    let devices = await deviceRepository.find();
    res.json(devices);
})

router.get('/device/:id', async (req, res) => {
    let deviceRepository = dataSource.getRepository("Devices");
    let deviceId = req.params.id;
    let device = await deviceRepository.findOneBy({
        id: deviceId
    });
    res.json(device);
})

/**
 * Servicio para crear dispositivos nuevos y almacenarlos en la base de datos bien chido :P
 */
router.post('/devices/register', (req, res) => {
    let deviceRepository = dataSource.getRepository("Devices");
    let newDevice = {
        article: req.body.article,
        brand: req.body.brand,
        serial: req.body.serial,
        diagnostic: req.body.diagnostic,
        state: 0,
        user: req.body.userId,
    };
    deviceRepository.save(newDevice);
    res.json({"Exito": "El articulo ha sido creado exitosamente"});
})

module.exports = router;