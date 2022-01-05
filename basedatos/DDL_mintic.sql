/*==============================================================*/
/* Table: equipos                                               */
/*==============================================================*/
create table equipos (
   cod_equipo           serial               not null,
   cod_imagen           int4                 not null,
   nombre_equipo        varchar(100)         not null,
   fechafundacion_equipo date                 not null,
   estadio_equipo       varchar(100)         not null,
   constraint pk_equipos primary key (cod_equipo)
);

-- set table ownership
alter table equipos owner to user_node
;
/*==============================================================*/
/* Table: imagenes                                              */
/*==============================================================*/
create table imagenes (
   cod_imagen           serial               not null,
   nombrepublico_imagen varchar(200)         not null,
   nombreprivado_imagen varchar(200)         not null,
   tipo_imagen          varchar(50)          not null,
   tamano_imagen        varchar(50)          not null,
   fechacreacion_imagen date                 not null,
   constraint pk_imagenes primary key (cod_imagen)
);

-- set table ownership
alter table imagenes owner to user_node
;
/*==============================================================*/
/* Table: jugadores                                             */
/*==============================================================*/
create table jugadores (
   cod_jugador          serial               not null,
   cod_usuario          int4                 not null,
   posicion_jugador     int2                 not null,
   dorsal_jugador       varchar(10)          not null,
   constraint pk_jugadores primary key (cod_jugador)
);

-- set table ownership
alter table jugadores owner to user_node
;
/*==============================================================*/
/* Table: jugaequipos                                           */
/*==============================================================*/
create table jugaequipos (
   cod_jugador          int4                 not null,
   cod_equipo           int4                 not null,
   constraint pk_jugaequipos primary key (cod_jugador, cod_equipo)
);

-- set table ownership
alter table jugaequipos owner to user_node
;
/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios (
   cod_usuario          serial               not null,
   cod_imagen           int4                 not null,
   documento_usuario    varchar(100)         not null,
   tipodocumento_usuario varchar(2)           not null
      constraint ckc_tipodocumento_usu_usuarios check (tipodocumento_usuario in ('CC','TI','TE','PN','TR','RC')),
   nombres_usuario      varchar(100)         not null,
   apellidos_usuario    varchar(100)         not null,
   correo_usuario       varchar(150)         not null,
   clave_usuario        varchar(250)         not null,
   constraint pk_usuarios primary key (cod_usuario)
);

comment on column usuarios.tipodocumento_usuario is
'LLave	Valor
CC	Cedula
TI	Tarjeta de Identidad
TE	Tarjeta de extranjeria
PN	Pasaporte Nacional
TR	Tarjeta de residencia
RC	Registro civil';

-- set table ownership
alter table usuarios owner to user_node
;
/*==============================================================*/
/* Index: indice_correo                                         */
/*==============================================================*/
create unique index indice_correo on usuarios (
correo_usuario
);

alter table equipos
   add constraint fk_equipos_imagenes foreign key (cod_imagen)
      references imagenes (cod_imagen)
      on delete restrict on update cascade;

alter table jugadores
   add constraint fk_jugadores_ref_usuarios foreign key (cod_usuario)
      references usuarios (cod_usuario)
      on delete restrict on update cascade;

alter table jugaequipos
   add constraint fk_jugaequi_jugadores foreign key (cod_jugador)
      references jugadores (cod_jugador)
      on delete restrict on update cascade;

alter table jugaequipos
   add constraint fk_jugaequi_equipos foreign key (cod_equipo)
      references equipos (cod_equipo)
      on delete restrict on update cascade;

alter table usuarios
   add constraint fk_usuarios_imagenes foreign key (cod_imagen)
      references imagenes (cod_imagen)
      on delete restrict on update cascade;
