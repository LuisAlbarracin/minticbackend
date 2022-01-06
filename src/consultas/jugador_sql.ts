export const SQL_JUGADOR = {
  'OBTENER_TODOS': 'SELECT j.cod_jugador, j.cod_usuario, u.nombres_usuario, \
   u.apellidos_usuario, j.posicion_jugador, j.dorsal_jugador \
   FROM jugadores j \
   INNER JOIN usuarios u \
   ON j.cod_usuario = u.cod_usuario \
   ORDER BY j.cod_jugador'
}
