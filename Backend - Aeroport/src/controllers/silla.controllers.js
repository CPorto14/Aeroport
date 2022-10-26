import { getConnection, sql, queries } from "../database/indexDB"



export const getSilla = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllSilla)
    res.json(result.recordset)
}

export const getSillaById = async (req, res) => {
    try {
        const { idSilla } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input("idSilla", idSilla)
            .query(queries.getSillaById)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

}

export const postTotalSilla = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.postTotalSilla);
        res.json(result.recordset[0][""])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}