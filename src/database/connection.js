import sql from 'mssql';

const dbSettings ={
    user : "root",
    password: "root",
    server: "(local)",
    database: "airport"
}

sql.connect(dbSettings);