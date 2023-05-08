import {useState,useEffect} from 'react';
import "../assets/css/ultimoUsuario.css"

function UltimoUsuario(){
    const [users, setUsers] = useState([]);

    const obtenerDatos = async () => {
        fetch('http://localhost:3010/api/users')
        .then(function(response){
            return response.json()
        })
        .then(function(usuario){
            let usuarios = usuario.data
            let ultimoUsuario = usuarios[usuarios.length - 1]
            setUsers(ultimoUsuario)
        })
        .catch((error) => {
            console.error(error);
          });
        // http://localhost:3010
        
    }

    const revelarUsuario = () => {
        let bodyUltimoUsuario = document.querySelector('#body-ul-us')
        bodyUltimoUsuario.classList.toggle('revelarUlUs')
    }

    useEffect(() => {
        obtenerDatos()
    }, [])
    console.log(users)

    return(
        <div className='contenedor'>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <button className="card-header py-3"  onClick={revelarUsuario}>
                    <h4 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario</h4>
                </button>
                <div className="card-body revelarUlUs" id='body-ul-us'>
                    <div className="text-center">
                    {
                       users != undefined ? 
                       <div>
                            <p className="card-text">{users.first_name}</p>
                            <p className="card-text">{users.last_name}</p>
                            <p className="card-text">{users.email}</p>
                            <p className="card-text">{users.image}</p>
                       </div>
                       : "Cargando..."

                    }



                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default UltimoUsuario;
