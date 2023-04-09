const { Router } = require('express');
const router = Router();

var dataSource = require("./server")
 
//Raiz
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

module.exports = router;