import { Request, Response } from 'express';
import AccesoDAO from './../../daos/accesoDAO';
import {SQL_ACCESO } from './../../consultas/acceso_sql';

class AccesoController extends AccesoDAO{

  public iniciar(req: Request, res: Response): Promise<any>{
    console.log(req.body);
    const correo = req.body.correousuario;
    const clave = req.body.claveusuario;
    const parametros = [
      correo,
      clave
    ];
    return AccesoController.iniciarSesion(SQL_ACCESO.INICIAR, parametros, res);
  }

}

const accesoController = new AccesoController();
export default accesoController;
