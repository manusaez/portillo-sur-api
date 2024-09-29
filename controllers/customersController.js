const customersData = require('../data');

const getCustomerById = async (req, res) => {
    
    try {
        const result = await customersData.getCustomerById(req.params.id);
        res.json(result);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCustomerById
}