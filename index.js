const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();


// Directorio Público
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() )
// Rutas
app.use( '/auth', require('./routes/auth') );
app.use( '/ofertas', require('./routes/ofertas') );
app.use( '/foro', require('./routes/foro') );

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

