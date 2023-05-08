import ListGroup from 'react-bootstrap/ListGroup';
import "../assets/css/UsersList.css"
import { useState, useEffect } from 'react';
function UsersList() {

  const [users, setUsers] = useState([]);


  const obtenerDatos = async () => {
    fetch('http://localhost:3010/api/users')
      .then(function (response) {
        return response.json()
      })
      .then(function (usuario) {
        let usuarios = usuario.data
        setUsers(usuarios)
      })
      .catch((error) => {
        console.error(error);
      });
    // http://localhost:3010

  }

  const revelarUsuarios = () => {
    let bodyUsuarios = document.querySelector('#body-us')
    bodyUsuarios.classList.toggle('revelarUsu')
}


  useEffect(() => {
    obtenerDatos()
  }, [])

  let count = users.length
  return (

    <div className='contenedor'>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <button className="card-header py-3" onClick={revelarUsuarios}>
            <h4 className="m-0 font-weight-bold text-gray-800">Usuarios</h4>
          </button>
        </div>
        <div className="card-body revelarUsu" id='body-us'>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Count = {count}</li>
              {
                users.length > 0 ?
                  users.map((user, i) => {
                    return <li key={user + i}>{user.first_name} {user.last_name}</li>
                  })
                  : "Cargando..."

              }
            </ul>

          </div>
          <p></p>

        </div>
      </div>
    </div>
    // <div className='contenedor'>
    //   <ListGroup variant="flush">
    //     <h3>Usuarios:</h3>
    //     <p>Count: {count} </p>
    //     {
    //        users.length > 0 ? 
    //        users.map((user, i) => {
    //          return <ListGroup.Item key = {user + i}>{user.first_name} {user.last_name}</ListGroup.Item>
    //        })
    //        : "Cargando..."

    //     }

    //   {/* <ListGroup.Item>Ariadna Mazzocchi</ListGroup.Item>
    //   <ListGroup.Item>Ramón Marino</ListGroup.Item>
    //   <ListGroup.Item>Yago Sosa</ListGroup.Item>
    //   <ListGroup.Item>Uriel Sosa</ListGroup.Item> */}
    // </ListGroup>
    // </div>
  )
}

export default UsersList
