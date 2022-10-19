export const queries = {
    getAllSilla: "SELECT * FROM Silla",
    getAllReserva: "SELECT * FROM Reserva",
    addNewReserva: "INSERT INTO reserva (idCliente, idSilla, Fecha) VALUES (@idCliente,@idSilla,@Fecha)",
    getSillaById: "SELECT * FROM Silla WHERE idSilla = @idSilla",
    getReservaById: "SELECT * FROM reserva WHERE idReserva = @idReserva",
    deleteReservaById: "DELETE FROM reserva WHERE idReserva = @idReserva",
    getTotalReserva: "SELECT COUNT(*) FROM reserva",
    updateReservaById: "UPDATE reserva SET idSilla = @idSilla, Fecha = @Fecha WHERE idReserva = @idReserva"
}
