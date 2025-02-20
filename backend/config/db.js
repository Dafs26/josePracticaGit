//aqui nos conectaremos a la db
//EN ESTE CASO USARE MONGODB
//AUNQUE TAMBIEN QUIERO HACERLO CON MYSQL
//importamos mongoose 
import mongoose from 'mongoose';

const conectarDB = async ()=>{
 const db = await mongoose.connect(process.env.MONGO_URI,{

})
const url = `${db.connection.host}:${db.connection.port}`; 
console.log(`DB conectada en: ${url}`);
}

export default conectarDB;