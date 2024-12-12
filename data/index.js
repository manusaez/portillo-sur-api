const utils = require('./utils');
require('dotenv').config();
const sql = require('mssql')

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false
    }
}

const getCustomerById = async (rut) => {
    try {
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.getCustomerById;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
        .input('rut', rut)
        .query(query);
    } catch (error) {
        throw error;
    }
}

const getVehicles = async (params) => {
    try {
        //añadir parametro firstName al filtro
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.getVehicles;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
        .input('licensePlate', params.licensePlate ? params.licensePlate : '')
        .input('vin', params.vin ? params.vin : '')
        .input('brand', params.brand ? params.brand : '')
        .input('model', params.model ? params.model : '')
        .input('year', params.year ? params.year : '')
        .input('firstName', params.firstName ? params.firstName : '')
        .query(query);
    } catch (error) {
        throw error;
    }
}

const getOrderTypes = async () => {
    try {
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.getOrderTypes;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
        .query(query);
    } catch (error) {
        throw error;
    }
}

const saveOrder = async (order) => {
    try {
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.saveOrder;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
        .input('vin', order.vin)
        .input('organizationId', order.organizationId)
        .input('serviceAdvisorId', order.serviceAdvisorId)
        .input('promisedDate', order.promisedDate)
        .input('kilometers', order.kilometers)
        .input('orderType', order.orderType)
        .input('cone', order.cone)
        .input('firstName', order.firstName)
        .input('lastName', order.lastName)
        .input('mainPhone', order.mainPhone)
        .input('mobile', order.mobile)
        .input('email', order.email)
        .input('licensePlate', order.licensePlate)
        .input('brand', order.brand)
        .input('model', order.model)
        .input('year', order.year)
        .input('notes', order.notes)
        .query(query);
    } catch (error) {
        throw error;
    }
}

const getVehicleByVin = async (vin) => {
    try {
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.getVehicleByVin;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
        .input('vin', vin)
        .query(query);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCustomerById,
    getVehicles,
    getOrderTypes,
    saveOrder,
    getVehicleByVin
}
