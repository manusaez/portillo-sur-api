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

const getVehicles = async () => {
    try {
        const sqlQueries = await utils.loadSqlQueries('sql');
        const query = sqlQueries.getVehicles;
        let pool = await sql.connect(sqlConfig);
        return await pool.request()
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

module.exports = {
    getCustomerById,
    getVehicles,
    getOrderTypes
}
