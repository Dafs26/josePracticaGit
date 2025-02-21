import Header from "./components/Header"
import Button from "./components/Button"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contador from "./components/Contador"


function App() {
//componente principal
  return (
    <>
    <div className="flex flex-col min-h-screen bg-linear-to-t from-sky-100 to-indigo-500 ">

      <div className="max-w-3xl  mx-auto my-auto bg-white shadow shadow-indigo-300 p-10 m-10 rounded-lg">
        <div className=" my-10 max-w-lg mx-auto bg-white shadow-lg  shadow-indigo-300 p-10 rounded-lg">
         <Header />
        </div>
        <div className="flex my-20">
         <Button text="Iniciar sesion" fn={()=>{}}/>
         <Button text="Registrarse" fn={()=>{}}/>
        </div>
        <div className=" my-60 ">
          <Contador horaEntrada='15' horaSalida='22'/> 
         </div>
      </div>  
      <Footer/>
    </div> {/* contenedor principal */}    
    </>

  )
}

export default App
