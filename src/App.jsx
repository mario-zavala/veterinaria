import {useState,useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"
import './index.css'
import Paciente from "./components/Paciente"
function App() {
  //const pacientes: any[];
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
    const obtenerLocal=()=>{
      const pacinetesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacinetesLS)
    }
   // localStorage.setItem('pacientes');
   obtenerLocal();
   },[])

   useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
   },[pacientes])

  const eliminarPaciente=(id)=>{
  const pacientesActualizados=pacientes.filter(paciente=>paciente.Id !== id);
   setPacientes(pacientesActualizados)  
}

  return (
    <div className="container mx-auto mt-20">
      <Header 

      />
      <div className="mt-12 md:flex">      
      <Formulario
         pacientes={pacientes}
         setPacientes={setPacientes}
         paciente={paciente}
         setPaciente={setPaciente}
      />
      <ListadoPaciente
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div> 
    </div>
  )
}

export default App
