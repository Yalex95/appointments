
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintomas, id} = paciente

    
    const handleRemove = () =>{
        const respuesta = confirm(`eliminar paciente ${nombre}` )
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
  return (
    
    <div className="bg-white mx-5 my-3 shadow-md rounded-lg  px-5 py-10" id={id}>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
         <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {' '}
            <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">sintomas: {' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="grid grid-flow-col justify-stretch gap-x-4">
                <button type="button" onClick={()=>setPaciente(paciente)} className="bg-indigo-600 hover:bg-indigo-500 text-white  p-2 rounded-md">
                Editar 
                </button>
                <button type="button" onClick = {handleRemove} className="bg-red-600 hover:bg-red-500 text-white  p-2 rounded-md">
                Eliminar
                </button>
        </div>

  </div>
  )
}

export default Paciente