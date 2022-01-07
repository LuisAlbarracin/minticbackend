import { Request, Response } from 'express';
import AccesoDAO from './../../daos/accesoDAO';
import {SQL_ACCESO } from './../../consultas/acceso_sql';

class AccesoController extends AccesoDAO{

  public iniciar(req: Request, res: Response): Promise<any>{
    const correo = req.body.correoUsuario;
    const clave = req.body.claveUsuario;
    const parametros = [
      correo,
      clave
    ];
    return AccesoController.iniciarSesion(SQL_ACCESO.INICIAR, parametros, res);
  }

}

const accesoController = new AccesoController();
export default accesoController;