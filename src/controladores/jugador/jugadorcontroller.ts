import { Response, Request} from 'express';
import jugadorDAO from './../../daos/jugadorDAO';
import {SQL_JUGADOR} from './../../consultas/jugador_sql';

class JugadorController extends jugadorDAO{
  public consultarJugadores(req: Request, res: Response): Promise<any>{
    return JugadorController.obtenerJugadores(SQL_JUGADOR.OBTENER_TODOS, req, res);
  }
}

const jugadorController = new JugadorController();
export default jugadorController;
