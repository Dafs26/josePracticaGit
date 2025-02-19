
const generarId = () => {
    //date.now() devuelve la fecha actual en milisegundos
    //math.random() devuelve un numero aleatorio entre 0 y 1
    const id= Date.now().toString(32) + Math.random().toString(32).substring(2);
    return id;
}
export default generarId;