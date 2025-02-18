import horas from "../static/horas"

const Calculador = props => {
	return(
		<h2>{horas(props.entrada, props.salida)}</h2>
	)
}
export default Calculador