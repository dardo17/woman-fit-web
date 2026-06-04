const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlPool = mysql.createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


async function connectMySQL(){
    try{
        const connection = await mysqlPool.getConnection();
        console.log('Conexion exitosa a MYSQL');
        connection.release(); 
    
    
    } catch (error){
        console.error('Error al conectar con MYSQL:',error.message);
        throw error;
    }
}

module.exports = { mysqlPool,connectMySQL};
