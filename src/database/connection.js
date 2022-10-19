import sql from 'mssql';

const dbSettings = {
    user: "root",
    password: "root",
    server: "localhost",
    database: "airport", // cambia el nombre a airport(cesar) o aeroport(jhojan)
    encrypt: true,
    trustServerCertificate: true,


}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}
