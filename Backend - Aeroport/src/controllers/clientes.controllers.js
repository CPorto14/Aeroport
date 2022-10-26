import { request } from "express";
import { getConnection, sql, queries } from "../database/indexDB"


export const getClientes = async (req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCliente)
        res.json(result.recordset)
    } catch (error) {
        res.status(400)
        res.send(error.message);
    }
}

export const createNewClientes = async (req, res) => {

    const { Cedula, Nombre, Correo } = req.body

    if (Cedula == null || Nombre == null || Correo == null) {

        return res.status(400).json({ msg: "Bad request. Plese fill all fields" })
    }


        const poll = await getConnection()
        await poll.request()
            .input("Cedula", sql.Int, Cedula)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Correo", sql.VarChar, Correo)
            .query(queries.addNewCliente)
            console.log();
        res.json({ Cedula, Nombre, Correo })

}

export const getClientesById = async (req, res) => {

    try {
        const { Cedula } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input("Cedula", Cedula)
            .query(queries.getClienteById)
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const deleteClientesById = async (req, res) => {

    try {
        const { Cedula } = req.params
        const pool = await getConnection();
        const result = await pool.request()
            .input("Cedula", Cedula)
            .query(queries.deleteClienteById)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getTotalClientes = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTotalCliente)
        res.json(result.recordset[0][""])
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}


export const updateClientesById = async (req, res) => {

    const { Nombre, Correo } = req.body
    const { Cedula } = req.params


    if (Nombre == null || Correo == null) {

        return res.status(400).json({ msg: "Bad request. Plese fill all fields" })
    }

    const pool = await getConnection()
    await pool.request()
        .input("Nombre", sql.VarChar, Nombre)
        .input("Correo", sql.VarChar, Correo)
        .input("Cedula", sql.Int, Cedula)
        .query(queries.updateClienteById)

    res.json({Nombre, Correo })

}