import sql from 'mssql';

const dbSettings = {
    user: "root",
    password: "root",
    server: "localhost",
    database: "aeroport", // cambia el nombre a airport
    encrypt: true,
    trustServerCertificate: true,


}

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}


getConnection()
