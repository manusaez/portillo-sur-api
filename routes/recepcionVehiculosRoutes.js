const express = require('express');
const vehiclesController = require('../controllers/vehiclesController.js');
const customersController = require('../controllers/customersController.js');
const orderTypesController = require('../controllers/orderTypesController.js');
const router = express.Router();

router.get('/customers/:id', customersController.getCustomerById);
router.get('/vehicles', vehiclesController.getVehicles);
router.get('/orderTypes', orderTypesController.getOrderTypes);
/*router.get('/orders', recepcionVehiculosController.getVehiculosUsados);
*/
module.exports = {
    routes: router
}