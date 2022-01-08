import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class Seguridad {

  public verificarToken(req: Request, res: Response, next: NextFunction): any {
    if (!req.headers.authorization) {
      res.status(401).json({ 'miRespuesta': 'Autorización fallida' });
    } else {
      try {
        const miToken = req.headers.authorization ?.split(' ')[1] as string;
        const datos = jwt.verify(miToken, 'estaeslaclavesecretadelciclo4');
        req.body.datoUsuario = datos;
        next();
      } catch (miError) {
        res.status(403).json({ 'miRespuesta': 'Error en el token' });
      }
    }
  }

}

const seguridad = new Seguridad();
export default seguridad;
