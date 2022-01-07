import { Response } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import rutasImagenes from './../../configuracion/configimagenes';

class AccesoController_Verificar {

  public static async procesarRespuesta(registro: any, correo: string, res: Response): Promise<any> {
    let miBase64 = '';
    const rutaImagenPrivada = rutasImagenes.RUTA_FOTOS + registro.nombreprivado_imagen;
    const token = jwt.sign({
      'id': registro.cod_usuario,
      'correo': correo
    },
      'estaeslaclavesecretadelciclo4'
    );

    if(fs.existsSync(rutaImagenPrivada)){
      miBase64 = fs.readFileSync(rutaImagenPrivada, 'base64');
    }else{
      miBase64 = fs.readFileSync(rutasImagenes.RUTA_FOTO_DEFECTO, 'base64');
    }

    res.status(200).json({
      'tokenLogin': token,
      'base64Login': miBase64
    });
  }

}

export default AccesoController_Verificar;
