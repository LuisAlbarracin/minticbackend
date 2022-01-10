export const SQL_JUGADOR = {
  'OBTENER_TODOS': 'SELECT j.cod_jugador as codigojugador, \
   j.cod_usuario as codigousuario, u.nombres_usuario as nombresusuario, u.documento_usuario as documentousuario, \
   u.apellidos_usuario as apellidosusuario, j.posicion_jugador as posicionjugador, j.dorsal_jugador as dorsaljugador \
   FROM jugadores j \
   INNER JOIN usuarios u \
   ON j.cod_usuario = u.cod_usuario \
   ORDER BY j.cod_jugador'
}
