const customersData = require('../data');

const getVehicles = async (req, res) => {
    var out = new Object()
    try {
        const result = await customersData.getVehicles();
        let customer = result.recordset.length ? result.recordset[0] : null;

        if(customer) {
            out.success = true;
            out.message = null;
            out.data = customer;
            res.status(200).json(out);
        } else {
            out.success = false;
            out.message = "Cliente no encontrado";
            out.data = null;
            res.status(404).json(out);
        }
            
    } catch (error) {
        out.success = false;
        out.message = error.message;
        out.data = null;
        res.status(500).send(out);
    }
}

module.exports = {
    getVehicles
}