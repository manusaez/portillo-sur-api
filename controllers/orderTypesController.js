const customersData = require('../data');

const getOrderTypes = async (req, res) => {
    var out = new Object()
    try {
        const result = await customersData.getOrderTypes();
        let orderTypes = result.recordset.length ? result.recordset : null;

        if(orderTypes) {
            out.success = true;
            out.message = null;
            out.data = orderTypes;
            res.status(200).json(out);
        } else {
            out.success = false;
            out.message = "No se encontraron tipos de ordenes de trabajo";
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
    getOrderTypes
}