const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); // Importar las rutas

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB Atlas usando el URI del clúster
mongoose.connect('mongodb+srv://hrcamilo11:wxUZuMjFx5ka9Aba@cluster0.zy00j.mongodb.net/TravelTalesDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
}).catch(err => {
    console.error('Error conectando a MongoDB Atlas', err);
});


// Usar las rutas definidas en routes.js
app.use('/api', routes);

// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
