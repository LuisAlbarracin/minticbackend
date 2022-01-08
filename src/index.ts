import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import jugadorRutas from './rutas/jugadorrutas';
import accesoRutas from './rutas/accesorutas'
import seguridad from './middleware/seguridad';

class MiServidor {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.configuracion();
    this.rutas();
  }

  public configuracion(): void {
    this.app.set('PORT', 8099);
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json({
      limit: '100mb',
    }));
    this.app.use(express.urlencoded({
      extended: true
    }));
  }

  public rutas(): void {
    this.app.use('/api/privado/jugador', seguridad.verificarToken, jugadorRutas);
    this.app.use('/api/publico/acceso', accesoRutas);
  }

  public iniciar(): void {
    this.app.listen(this.app.get('PORT'), () => {
      console.log("Servidor Api funcionando en el puerto: ", this.app.get('PORT'));
    });
  }

}
const servidorFinal = new MiServidor();
servidorFinal.iniciar();
