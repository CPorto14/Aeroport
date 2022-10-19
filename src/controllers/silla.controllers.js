import { getConnection, sql,queries } from "../database/indexDB"



export const getSilla = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllSilla)
    res.json(result.recordset)
}

export const getSillaById = async ( req, res) => {

    
}

