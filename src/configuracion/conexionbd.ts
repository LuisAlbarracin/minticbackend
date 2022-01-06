import variables from './configbd';
import pgPromise from 'pg-promise';

const pgp = pgPromise();
const pool = pgp(variables);

pool.connect().then((con)=>{
  console.log('conexion con la base de datos: ', variables.database);
  con.done();
}).catch((miError)=>{
  console.log('Error en la conexion: ', miError.code);
});

export default pool;
