import {Router} from 'express';
import accesoController from './../controladores/acceso/accesocontroller';

class AccesoRutas{
  public router: Router;

  constructor(){
    this.router = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void{
    this.router.post('/login', accesoController.iniciar);
  }

}

const accesoRutas = new AccesoRutas();
export default accesoRutas.router;
