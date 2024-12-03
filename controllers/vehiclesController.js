const data = require('../data');

const getVehicles = async (req, res) => {
    var out = new Object()
    try {

        let patente = req.query.licensePlate;
        let vin = req.query.vin;
        let brand = req.query.brand;
        let model = req.query.model;
        let year = req.query.year;

        if(Object.keys(req.query).length === 0  ) {
            out.success = false;
            out.message = "Debe ingresar al menos un filtro.";
            out.data = null;
            return res.status(400).json(out);
        }

        const result = await data.getVehicles(req.query);
        let vehicles = result.recordset.length ? result.recordset : null;

        if(vehicles) {
            out.success = true;
            out.message = null;
            out.data = vehicles;
            return res.status(200).json(out);
        } else {
            out.success = false;
            out.message = "No se encontraron vehículos.";
            out.data = null;
            return res.status(404).json(out);
        }
            
    } catch (error) {
        out.success = false;
        out.message = error.message;
        out.data = null;
        return res.status(500).send(out);
    }
}

module.exports = {
    getVehicles
}