import Paciente from "./Paciente"
import { useEffect } from "react"
function ListadoPaciente({pacientes,setPaciente,eliminarPaciente}) {
   /*
    useEffect(() => {
        if(pacientes.length>0){
            console.log('nuevo paciente')
        }
  
    }, [pacientes])
*/
    return (
        <>
            
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                   <h2 className="font-black text-3xl text-center">Listado de Paciente</h2>
                <p className="mt-5 text-center mb-10 text-xl">
                    Añade tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p> 
             {pacientes.map(paciente=>(
                 <Paciente
                 key={paciente.Id}
                 paciente={paciente}
                 setPaciente={setPaciente}
                 eliminarPaciente={eliminarPaciente}
                 />
                ))}                  
                </>
             
            ):(
                <>
                     <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="mt-5 text-center mb-10 text-xl">
                    Comienza agregando pacinetes y {''}
                    <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
                </p> 
                </>
            )}
          
         
        </div>
        </>
    )
}

export default ListadoPaciente
