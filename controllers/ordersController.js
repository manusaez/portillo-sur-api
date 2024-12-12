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
    var out = new Object()
    try {

        // Validamos que exista la placa patente?

        // Si el chasis no existe, respondemos "Chasis no encontrado"
        const resultChasis = await data.getVehicleByVin(req.body.vin)
        let existeChasis = resultChasis.recordset.length ? resultChasis.recordset : null;
        if(!existeChasis) {
            out.success = false;
            out.message = "Chasis no encontrado";
            out.data = null;
            return res.status(404).json(out);
        }

        let patente = req.body.licensePlate.toUpperCase();
        req.body.licensePlate = patente.substring(0, 2).concat('-').concat(patente.substring(2, 4)).concat('-').concat(patente.substring(4, 6));

        const result = await data.saveOrder(req.body);
        let orderTypes = result.recordset.length ? result.recordset : null;

        if(orderTypes) {
            out.success = true;
            out.message = null;
            out.data = orderTypes;
            return res.status(200).json(out);
        } else {
            out.success = false;
            out.message = "No se encontraron tipos de ordenes de trabajo";
            out.data = null;
            return res.status(404).json(out);
        }
            
    } catch (error) {
        console.log(error)
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