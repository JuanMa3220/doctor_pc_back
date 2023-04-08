const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})

router.get('/home', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo 2"
        }
    );
});

router.get('/servicios', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo 2"
        }
    );
});

module.exports = router;