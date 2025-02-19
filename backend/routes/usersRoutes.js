//routing de nuestra api

import { login,perfil,registrar } from '../controllers/usersController.js';//importamos el controlador veterinario
import express from 'express';//importamos express
const router = express.Router();
//login
//url/api/users/login
//post porque estamos enviando datos al servidor en un formulario
router.get('/',(req,res)=>{
    res.send('Hola desde la ruta usuarios');
});
//ruta para login

router.post('/login',login);//ruta para autenticar usuario
router.post('/registrar',registrar);//ruta para registrar usuario
router.get('/perfil',perfil);//ruta para ver perfil usuario
router.get('/confirmar/:token',login);//ruta para confirmar cuenta usuario
router.post('/autenticar',login);//ruta para autenticar usuario
router.get('/logout',login);//ruta para cerrar sesion usuario
router.get('/recuperar',login);//ruta para recuperar contraseña usuario
router.post('/cambiar',login);//ruta para cambiar contraseña usuario


export default router;