import { Router } from 'express';
import jugadorController from './../controladores/jugador/jugadorcontroller';

class JugadorRutas {
  public router: Router;

  constructor() {
    this.router = Router();
    this.configuracion();
  }

  public configuracion(): void {
    this.router.get('/', jugadorController.consultarJugadores);
  }
}

const jugadorRutas = new JugadorRutas();
export default jugadorRutas.router;
