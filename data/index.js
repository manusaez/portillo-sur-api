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
        //let pool = new sql.Request()
        const result = await pool.request()
        .input('rut', rut)
        .query(query);
        console.log(result);
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

//getCustomerById();

module.exports = {
    getCustomerById
}
