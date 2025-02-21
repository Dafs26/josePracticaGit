///archivo principal del backend

import express from 'express';
import usersRoutes from './routes/usersRoutes.js';//IMPORTAMOS LAS RUTAS DE USUARIOS
import dotenv from 'dotenv';//IMPORTAMOS LA LIBRERIA PARA LAS VARIABLES DE ENTORNO
import conectarDB from './config/db.js';

dotenv.config( {
  path: './.env'
});//CARGAMOS LAS VARIABLES DE ENTORNO

conectarDB();// conectamos la db

const app = express();//INICIALIZAMOS EXPRESS EN UNA CONSTANTE
//process.env.PORT LO ASIGNA AUTOMATICAMENTE  EL HOST DONDE HAGAMOS EL DEPLOYMENT
const port =  process.env.PORT || 4000;//DEBEMOS DEFINIR UN PUERTO EN LAS VARIABLES DE ENTORN
app.use(express.json());//para habilitar el envio de datos en formato json


//routing
//definimos las rutas de la aplicacion donde accederemos desde el frontend
app.use("/api/users",usersRoutes);//




// iniciamos el servidor
app.listen(port, () => { //INICIAMOS EL SERVIDOR
  console.log(`Server running on port ${port}`);
});
