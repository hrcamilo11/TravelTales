const express = require('express');
const { Destino, Hotel, Restaurante, Usuario } = require('./models');  // Importar los modelos
const router = express.Router();

// Rutas para la colección "Destinos"
router.get('/destinos', async (req, res) => {
    try {
        const destinos = await Destino.find();  // Consultar todos los destinos
        res.json(destinos);
    } catch (err) {
        res.status(500).json({ message: 'Error obteniendo los destinos', error: err });
    }
});

router.post('/destinos', async (req, res) => {
    try {
        const newDestino = new Destino(req.body);  // Crear un nuevo destino
        await newDestino.save();
        res.json(newDestino);
    } catch (err) {
        res.status(500).json({ message: 'Error guardando el destino', error: err });
    }
});

// Rutas para la colección "Hoteles"
router.get('/hoteles', async (req, res) => {
    try {
        const hoteles = await Hotel.find();  // Consultar todos los hoteles
        res.json(hoteles);
    } catch (err) {
        res.status(500).json({ message: 'Error obteniendo los hoteles', error: err });
    }
});

router.post('/hoteles', async (req, res) => {
    try {
        const newHotel = new Hotel(req.body);  // Crear un nuevo hotel
        await newHotel.save();
        res.json(newHotel);
    } catch (err) {
        res.status(500).json({ message: 'Error guardando el hotel', error: err });
    }
});

// Rutas para la colección "Restaurantes"
router.get('/restaurantes', async (req, res) => {
    try {
        const restaurantes = await Restaurante.find();  // Consultar todos los restaurantes
        res.json(restaurantes);
    } catch (err) {
        res.status(500).json({ message: 'Error obteniendo los restaurantes', error: err });
    }
});

router.post('/restaurantes', async (req, res) => {
    try {
        const newRestaurante = new Restaurante(req.body);  // Crear un nuevo restaurante
        await newRestaurante.save();
        res.json(newRestaurante);
    } catch (err) {
        res.status(500).json({ message: 'Error guardando el restaurante', error: err });
    }
});

// Rutas para la colección "Usuarios"
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();  // Consultar todos los usuarios
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ message: 'Error obteniendo los usuarios', error: err });
    }
});

router.post('/usuarios', async (req, res) => {
    try {
        const newUsuario = new Usuario(req.body);  // Crear un nuevo usuario
        await newUsuario.save();
        res.json(newUsuario);
    } catch (err) {
        res.status(500).json({ message: 'Error guardando el usuario', error: err });
    }
});

// Ruta para iniciar sesión
router.post('/usuarios/login', async (req, res) => {
    const { email, password } = req.body;  // Obtener email y contraseña del cuerpo de la solicitud
    try {
        const usuario = await Usuario.findOne({ email });  // Buscar usuario por email
        if (!usuario) {
            return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
        }

        // Aquí deberías verificar la contraseña
        // Supongamos que estás usando bcrypt para hashear las contraseñas
        const match = await bcrypt.compare(password, usuario.password);
        if (!match) {
            return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
        }

        res.json(usuario);  // Devuelve el usuario en caso de éxito
    } catch (err) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: err });
    }
});


module.exports = router;  // Exportar el router
