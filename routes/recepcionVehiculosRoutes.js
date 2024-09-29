const express = require('express');
const recepcionVehiculosController = require('../controllers/recepcionVehiculosController.js');
const customersController = require('../controllers/customersController.js');
const router = express.Router();

router.get('/customers/:id', customersController.getCustomerById);

/*router.get('/vehicles', recepcionVehiculosController.getVehicles);
router.get('/orderTypes', recepcionVehiculosController.getVehiculosUsados);
router.get('/orders', recepcionVehiculosController.getVehiculosUsados);
*/
module.exports = {
    routes: router
}