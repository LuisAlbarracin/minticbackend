export const SQL_ACCESO = {
  'INICIAR': 'SELECT u.cod_usuario, i.nombre_privado_imagen \
  FROM usuarios u \
  INNER JOIN imagenes i \
  ON u.cod_imagen = i.cod_imagen \
  WHERE u.correo_usuario = $1 \
  AND u.clave_usuario = $2'
}
