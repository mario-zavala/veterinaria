function Paciente({paciente,setPaciente,eliminarPaciente}) {
    const {nombre,propietario,email,fecha,sintomas,Id}=paciente;
    const handleEliminar=()=>{
        const respuesta=confirm('¿Deseas eliminar este paciente');
        if(respuesta){
            eliminarPaciente(Id);
        }
    }
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Nombre:{' '}
            <span className="font-normal  normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Propietario:{' '}
            <span className="font-normal  normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Email:{' '}
            <span className="font-normal  normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Fecha Alta:{' '}
            <span className="font-normal  normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Sintomas:{' '}
            <span className="font-normal  normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
        <button types="button" onClick={()=>setPaciente(paciente)}  className="bg-green-500   py-2 px-8 rounded-lg uppercase font-bold text-white hover:bg-blue-700 curso-pointer transition-all text">Editar</button>
        <button  types="button" onClick={handleEliminar}  className="bg-orange-500   py-2 px-8 rounded-lg uppercase font-bold text-white hover:bg-blue-700 curso-pointer transition-all text" >Eliminar</button>
        </div>
            
    </div>  
    )
}

export default Paciente
