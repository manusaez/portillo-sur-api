const express = require('express');
const vehiclesController = require('../controllers/vehiclesController.js');
const customersController = require('../controllers/customersController.js');
const ordersController = require('../controllers/ordersController.js');
const securityController = require('../controllers/securityController.js')

const router = express.Router();

router.get('/customers/:id', securityController.validaToken, customersController.getCustomerById);
router.get('/vehicles', securityController.validaToken, vehiclesController.getVehicles);
router.get('/orderTypes', securityController.validaToken, ordersController.getOrderTypes);
router.post('/orders', securityController.validaToken, ordersController.saveOrder);
router.post('/login', securityController.getToken);

module.exports = {
    routes: router
}