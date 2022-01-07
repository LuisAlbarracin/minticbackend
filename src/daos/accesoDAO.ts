import { Response } from 'express';
import pool from './../configuracion/conexionbd';
import AccesoController_Verificar from './../controladores/acceso/accesocontroller_verificar';

class AccesoDAO {

  public static async iniciarSesion(sql: string, parametros: any, res: Response): Promise<any> {
    await pool.task(async (consulta)=>{
      const fila = await consulta.result(sql, parametros);
      return fila;
    })
    .then((resultado)=>{
      const arreglo = resultado.rows;
      if(arreglo.length > 0){
        // Aquí va la respuesta si existe el usuario
        AccesoController_Verificar.procesarRespuesta(arreglo[0], parametros[0], res);
      }else{
        res.status(400).json({
          'miRespuesta': 'Usuario no existe'
        })
      }
    })
    .catch((miError)=>{
      console.log(miError);
      res.status(403).json({
        'miRespuesta': 'Usuario no Valido'
      });
    });
  }

}

export default AccesoDAO;
