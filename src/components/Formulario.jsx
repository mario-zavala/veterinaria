import {useEffect,useState} from "react"
import Error from "./Error";
const Formulario= ({pacientes,setPacientes,paciente,setPaciente})=> {
    const [nombre,setNombre]= useState('');
    const [propietario,setPropietario]= useState('');
    const [email,setEmail]= useState('');
    const [fecha,setFecha]= useState('');
    const [sintomas,setSintomas]= useState('');

     //error
     const [error, setError] = useState(false);
     
     useEffect(() => {
     if(Object.keys(paciente).length>0){
       setNombre(paciente.nombre)
       setPropietario(paciente.propietario)
       setEmail(paciente.email)
       setFecha(paciente.fecha)
       setSintomas(paciente.sintomas)
     }
     }, [paciente])

     const generaId=()=>{
        const randow=Math.random().toString(36).substring(2);
        const fecha=Date.now().toString(36);
       return fecha+randow;
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      //validacion
      if([nombre,propietario,email,fecha,sintomas].includes('')){
          console.log('Esta 1 campo vacio')
          setError(true);
          return;
      }
        setError(false);
        const objetoPaciente={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        if(paciente.Id){
            objetoPaciente.Id=paciente.Id;
            const pacientesAct=pacientes.map(pacienteState=> pacienteState.Id===paciente.Id? objetoPaciente:pacienteState)
            setPacientes(pacientesAct)
            setPaciente({})
        }else{
            objetoPaciente.Id=generaId();
            setPacientes([...pacientes,objetoPaciente])
        }
        
       //reiniciar
       setEmail('')
       setNombre('')
       setSintomas('')
       setPropietario('')
       setFecha('')
    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>
            <form className="bg-white shadow rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                {error && <Error> Todos los campos son obligatorios</Error>}
                
              <div>
                  <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                  <input id="mascota"type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                  value={nombre}
                  onChange={(e)=>setNombre(e.target.value)}
                  />
                  </div>
                  <div className="mt-3">
                  <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                  <input id="Propietario"type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                 value={propietario}
                                 onChange={(e)=>setPropietario(e.target.value)}
                  />
                  </div> 
                  <div className="mt-3">
                  <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">Email</label>
                  <input id="Email"type="email" placeholder="Email Contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                 value={email}
                                 onChange={(e)=>setEmail(e.target.value)}
                  />
                  </div> 
                  <div className="mt-3">
                  <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha Registro</label>
                  <input id="alta"type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                 value={fecha}
                                 onChange={(e)=>setFecha(e.target.value)}
                  />
                  </div> 
                  <div className="mt-3">
                  <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                  <textarea id="sintomas" placeholder="Describe los sintomas" className="borde-2 w-full p-2 mt-2 placeholder-gray-400" 
                                 value={sintomas}
                                 onChange={(e)=>setSintomas(e.target.value)}>                      
                  </textarea>
                  </div>
                  <button  className="bg-blue-500 w-full p-3 rounded-lg uppercase font-bold text-white hover:bg-orange-700 curso-pointer transition-all text" types="submit">{paciente.Id ? 'Editar Paciente':'Agregar Paciente'}</button>   
            </form>
        </div>
        
    )
}

export default Formulario

