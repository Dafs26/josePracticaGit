import { horasTrabajadas } from "../utils/helpers"

const Contador = (props) =>{
	return(
		<h1 className="text-5xl text-red-500">{horasTrabajadas(props.horaEntrada, props.horaSalida)} Horas trabajadas</h1>
	)
}

export default Contador