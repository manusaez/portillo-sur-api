const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();

app.use(express.json({ limit: '5mb' }));

app.use('/api/v1', apiRoutes.routes);

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en puerto:' + process.env.PORT )
  });

