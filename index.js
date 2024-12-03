const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '5mb' }));

app.use('/api/v1', apiRoutes.routes);

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en puerto:' + process.env.PORT )
  });

