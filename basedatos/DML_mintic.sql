/*==============================================================*/
/* Table: imagenes                                              */
/*==============================================================*/
INSERT INTO imagenes(nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamano_imagen, fechacreacion_imagen) VALUES ('nodisponible.png', '123456.png','image/png', '0kb',CURRENT_DATE);


/*==============================================================*/
/* Table: equipos                                               */
/*==============================================================*/
INSERT INTO equipos(cod_imagen, nombre_equipo, fechafundacion_equipo, estadio_equipo) VALUES ( 1, 'Millonarios', '2015-01-01', 'Estadio brutal');

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/

/*=================== Usuarios iniciar sesión ==================*/
INSERT INTO usuarios(cod_imagen, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, correo_usuario, clave_usuario)
values (1, '666777888', 'CC', 'Carlos Andrés', 'Guerrero Alarcón', 'admin@msn.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413');
INSERT INTO usuarios(cod_imagen, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, correo_usuario, clave_usuario)
values (1, '33555444', 'CC', 'Ramon', 'Valdez', 'ing@msn.com', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413');

/*=================== Usuarios jugadores =======================*/
INSERT INTO usuarios(cod_imagen, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, correo_usuario, clave_usuario)
values (1, '22666874', 'TI', 'Antony', 'De ávila', 'elpitufo@hotmail.com', 'sinacceso');
INSERT INTO usuarios(cod_imagen, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, correo_usuario, clave_usuario)
values (1, '22666874', 'PN', 'James la Guama', 'Rodríguez pérez', 'eljames@hotmail.com', 'sinacceso');
INSERT INTO usuarios(cod_imagen, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, correo_usuario, clave_usuario)
values (1, '22666874', 'CC', 'Carlos Alberto', 'Valderrama', 'elpibe@hotmail.com', 'sinacceso');

/*==============================================================*/
/* Table: jugadores                                             */
/*==============================================================*/
INSERT INTO jugadores(cod_usuario, posicion_jugador, dorsal_jugador) VALUES (3, 10, 'CAP');
INSERT INTO jugadores(cod_usuario, posicion_jugador, dorsal_jugador) VALUES (4, 15, 'DEL');
INSERT INTO jugadores(cod_usuario, posicion_jugador, dorsal_jugador) VALUES (5, 8, 'DEF');

/*==============================================================*/
/* Table: jugaequipos                                           */
/*==============================================================*/
INSERT INTO jugaequipos(cod_jugador, cod_equipo) VALUES (1, 1);
INSERT INTO jugaequipos(cod_jugador, cod_equipo) VALUES (2, 1);
INSERT INTO jugaequipos(cod_jugador, cod_equipo) VALUES (3, 1);
