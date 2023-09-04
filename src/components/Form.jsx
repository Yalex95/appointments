import { useEffect, useState } from "react"
import Error from "./Error";


const Form = ({ pacientes,setPacientes, paciente, setPaciente}) => {

     const [nombre, setNombre] = useState('');
     const [propietario, setPropietario] = useState('');
     const [email, setEmail] = useState('');
     const [alta, setAlta] = useState('');
     const [sintomas, setSintomas] = useState('');

     const [error, setError] = useState(false);

    useEffect(() => {
        
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);

    const generarId=()=>{
        const random = crypto.randomUUID();
        return random
    }
    const handleSumbit = (e) =>{
        e.preventDefault();
        // Validacion del Formulario
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return
        }
        setError(false)
        // objeto Paciente
        const objPaciente = {
             nombre,
             propietario,
             email,
             alta,
             sintomas

        }
        if(paciente.id){
            objPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }

        // Reset values
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Add Pacients and {''}
                <span className="font-bold text-indigo-600">Administrate them</span>
            </p>
            <form 
            onSubmit={handleSumbit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="nombre_mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" 
                    id="nombre_mascota"
                    value={nombre}
                    onChange={ (e)=>setNombre(e.target.value) }
                    placeholder="Nombre de la mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" 
                    id="propietario"
                    value={propietario}
                    onChange={ (e)=>setPropietario(e.target.value)}
                    placeholder="Nombre del propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input type="email" 
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">alta</label>
                    <input type="date" 
                    id="alta"
                    value={alta}
                    onChange={(e)=>setAlta(e.target.value)}
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea 
                    name="sintomas" id="sintomas" 
                    placeholder="Describe los sitomas" 
                    value={sintomas}
                    onChange={(e)=>setSintomas(e.target.value)}
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <input 
                type="submit" 
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 rounded-md cursor-pointer transition-all"
                
                />
            </form>
        </div>
    )
    
}
export default Form