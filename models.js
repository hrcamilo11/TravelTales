const mongoose = require('mongoose');

// Definir esquema para la colección "Destinos"
const destinoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true }
});

// Definir esquema para la colección "Hoteles"
const hotelSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    destino: { type: String, required: true },  // Nombre del destino asociado
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true }
});

// Definir esquema para la colección "Restaurantes"
const restauranteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    destino: { type: String, required: true },  // Nombre del destino asociado
    imagen: { type: String, required: true },
    descripcion: { type: String, required: true }
});

// Definir esquema para la colección "Usuarios"
const usuarioSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoritos: { type: Array, default: [] },   // Guardar favoritos en un array
    isAdmin: { type: Boolean, default: false }
});

// Crear modelos de Mongoose para cada colección
const Destino = mongoose.model('Destino', destinoSchema, 'Destinos');  // Nombre de la colección
const Hotel = mongoose.model('Hotel', hotelSchema, 'Hoteles');          // Nombre de la colección
const Restaurante = mongoose.model('Restaurante', restauranteSchema, 'Restaurantes');  // Nombre de la colección
const Usuario = mongoose.model('Usuario', usuarioSchema, 'Usuarios');   // Nombre de la colección

// Exportar los modelos
module.exports = { Destino, Hotel, Restaurante, Usuario };
