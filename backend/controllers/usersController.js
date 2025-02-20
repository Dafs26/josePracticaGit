//los controlles son funciones que se encargan de gestionar las peticiones http
import User from "../models/user.js";//importamos el modelo veterinario

//login
//url/api/users/login
const login = async (req, res) => {
    //logica del login
    res.json({msg:"login"});

}
    //registrar un usuario
    const registrar = async (req, res) => { 
        const {email} = req.body;//destructuramos el email del cuerpo de la peticion
        //revisar para evitar usuarios duplicados
        //findone recibe un objeto con el campo a buscar
        const existeUsuario = await User.findOne({email});//buscamos un usuario con el email
        if (existeUsuario) {//si existe el usuario con el email
            const error = new Error("El email ya esta registrado");
            return res.status(400).json({msg:error.message});//enviamos un mensaje de error
    
        }
       
        try{
            const user = new User(req.body);
            //await espera a que se guarde el veterinario en la base de datos y luego continua con la ejecucion
             await user.save();// guardamos el veterinario en la base de datos
            //save es un metodo de mongoose para guardar en la base de datos
            res.json({"msg":`${req.body.nombre} registrado`});
             console.log("Registrado: ",req.body.nombre);
        }catch(error){
            console.log(`error: ${error.message}`);
            res.status(400).send(error.message);
        }
    }


const perfil = async (req, res) => {
    //ver perfil de un usuario
    res.json({msg:"perfil"});

}

const autenticar = async (req, res) => {
    //autenticar un usuario
    res.json({msg:"autenticar"});

}

const confirmar = async (req, res) => {
    //confirmar cuenta de un usuario
    res.json({msg:"confirmar"});

}



export { login,registrar,perfil,autenticar,confirmar }; //exportamos las funciones