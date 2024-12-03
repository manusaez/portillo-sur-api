const data = require('../data');

const getOrderTypes = async (req, res) => {
    var out = new Object()
    try {
        const result = await data.getOrderTypes();
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

const saveOrder = async (req, res) => {

    try {

        // Si el usuario no existe, respondemos "Cliente no existe"
        // Si el chasis no existe, respondemos "Chasis no existe"
        // Si chasis existe, actualizar patente en MaeVehiculos
        
        //Si cliente o chasis no existe, excepción
        const result = await data.saveOrder(req.body);
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
    getOrderTypes,
    saveOrder
}