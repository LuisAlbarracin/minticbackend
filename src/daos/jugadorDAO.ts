import { Response } from 'express';
import pool from './../configuracion/conexionbd';

class JugadorDAO{

  protected static async obtenerJugadores(sql: string, parametros: any, res: Response): Promise<any>{
    await pool.result(sql, parametros)
    .then((resultado)=>{
      const arreglo = resultado.rows;
      if(arreglo.length > 0){
        res.status(200).json(arreglo)
      }else {
      res.status(400).json(arreglo);
    }
    })
    .catch((miError)=>{
      console.log(miError);
      res.status(400).json({respuesta: 'Error en la consulta'})
    });
  }

}

export default JugadorDAO;
