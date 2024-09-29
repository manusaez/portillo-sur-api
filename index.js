const express = require('express');
const vehiculosRoutes = require('./routes/recepcionVehiculosRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', vehiculosRoutes.routes);

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en puerto:' + process.env.PORT )
  });

