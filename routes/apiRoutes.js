const express = require('express');
const vehiclesController = require('../controllers/vehiclesController.js');
const customersController = require('../controllers/customersController.js');
const ordersController = require('../controllers/ordersController.js');
const securityController = require('../controllers/securityController.js')

const router = express.Router();

router.get('/customers/:id', customersController.getCustomerById);
router.get('/vehicles', vehiclesController.getVehicles);
router.get('/orderTypes', ordersController.getOrderTypes);
router.post('/orders', ordersController.saveOrder);
router.post('/token', securityController.getToken);

module.exports = {
    routes: router
}