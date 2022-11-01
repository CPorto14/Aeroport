export const queries = {
    getAllReserva: "SELECT * FROM Reserva",
    addNewReserva: "INSERT INTO reserva (idCliente, idSilla, fecha) VALUES (@idCliente,@idSilla,@Fecha)",
    getReservaById: "SELECT * FROM reserva WHERE idReserva = @idReserva",
    deleteReservaById: "DELETE FROM reserva WHERE idReserva = @idReserva",
    getTotalReserva: "SELECT COUNT(*) FROM reserva",
    updateReservaById: "UPDATE reserva SET idSilla = @idSilla, Fecha = @Fecha WHERE idReserva = @idReserva",

    getSillaById: "SELECT * FROM Silla WHERE idSilla = @idSilla",
    getAllSilla: "SELECT * FROM Silla",
    postTotalSilla: "SELECT COUNT(*) FROM silla",

    getAllCliente: "SELECT * FROM cliente",
    addNewCliente: "INSERT INTO cliente (Cedula, Nombre, Correo) VALUES (@Cedula,@Nombre,@Correo)",
    getClienteById: "SELECT * FROM clientes WHERE Cedula = @Cedula",
    deleteClienteById: "DELETE FROM clientes WHERE Cedula = @Cedula",
    getTotalCliente: "SELECT COUNT(*) FROM clientes",
    updateClienteById: "UPDATE clientes SET Nombre = @Nombre, Correo = @Correo WHERE Cedula = @Cedula",

}
