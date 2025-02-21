//modelo del usuario para la base de datos
//aqui definimos el modelo del usuario
//importamos mongoose
import mongoose from 'mongoose';
//importamos bcrypt para encriptar la contraseña
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generarId from '../helpers/generarId.js';
//definimos el esquema del usuario
const userSchema = new mongoose.Schema({
    nombre: {
        type: String, //tipo de dato
        required: true, 
        trim: true,
        minlength: 3,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un email valido'],
        minlength: 12,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,

    },

    token:{// token para confirmar la cuenta 
        type: String,
        default: generarId(),//fecha de creacion del token 
    },
    confirmado:{//si su cuenta esta confirmada
        type: Boolean,//tipo de dato
        default:false,// cambia a true cuando se confirma la cuenta con el enlace de email
    },
    diasTrabajados:{
        type: Number,
        default: 0,
    },
    horasTrabajadas:{
        type: Number,
        default: 0,
    },
    horasExtra:{
        type: Number,
        default: 0,
    },
    HorasNocturnas:{
        type: Number,
        default: 0,
    },
    
    
});
    //metodo para encriptar la contraseña

userSchema.pre("save", async function(next) {
    
    if (!this.isModified("password")) { //si la contraseña no ha sido modificada o no ha sido hasheada 
         next();//saltamos al siguiente middleware 
    }
    //se debe usar await para que se ejecute el codigo de forma asincrona
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);//REGISTRAMOS EL MODELO VETERINARIO EN LA BASE DE DATOS EN MONGOOSE

export default User;//exportamos el modelo veterinario para poder usarlo en otros archivos
