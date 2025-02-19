//los controlles son funciones que se encargan de gestionar las peticiones http

//login
//url/api/users/login
const login = async (req, res) => {
    //logica del login
    res.json({msg:"login"});

}
const registrar = async (req, res) => {
    //registrar un usuario
    res.json({msg:"registrar"});

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