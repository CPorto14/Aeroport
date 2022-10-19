
import { request } from "express";
import { getConnection, sql, queries } from "../database/indexDB"


export const getReserva = async (req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllReserva)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const createNewReserva = async (req, res) => {

    const { idCliente, idSilla, Fecha } = req.body

    if (idCliente == null || idSilla == null || Fecha == null) {

        return res.status(400).json({ msg: "Bad request. Plese fill all fields" })
    }

    /* forma para cuando no es necesario un campo: 
    let {fecha}=req.body
    if (Fecha == null) Fecha =0;
    */
    try {
        const poll = await getConnection()
        await poll.request()
            .input("idCliente", sql.Int, idCliente)
            .input("idSilla", sql.Int, idSilla)
            .input("Fecha", sql.VarChar, Fecha)
            .query(queries.addNewReserva)

        res.json({ idCliente, idSilla, Fecha })

    } catch (error) {

        res.status(500)
        res.send(error.message);
    }
}

export const getReservaById = async (req, res) => {

    try {
        const { idReserva } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input("idReserva", idReserva)
            .query(queries.getReservaById)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const deleteReservaById = async (req, res) => {

    try {
        const { idReserva } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input("idReserva", idReserva)
            .query(queries.deleteReservaById)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getTotalReserva = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTotalReserva)
        res.json(result.recordset[0][""])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}


export const updateReservaById = async (req,res) => {
    
    const { idSilla, Fecha } = req.body
    const {idReserva}= req.params
   
   
    if ( idSilla == null || Fecha == null) {

        return res.status(400).json({ msg: "Bad request. Plese fill all fields" })
    }

    const pool= await getConnection()
    await pool.request()
    .input("idSilla", sql.Int, idSilla)
    .input("Fecha", sql.VarChar, Fecha)
    .input("idReserva",sql.Int, idReserva)
    .query(queries.updateReservaById)

    res.json({ idSilla, Fecha})

}
