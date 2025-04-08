import { useEffect, useState } from 'react'
import './user.scss'
import { useApi } from '../../hooks/useApi'
import { getUsers } from '../../api'
import { CustomTable } from '../../components/custom-table/CustomTable'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenAlt,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const COLUMNS = [
  { field: 'name', headerName: 'Nombre del usuario' },
  { field: 'identification', headerName: 'Cédula' },
  { field: 'phone', headerName: 'Teléfono' },
]

export const User = () => {
  const { callApi } = useApi()
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const response = await callApi(getUsers())

    if (response.success) {
      const formatedUsers = response.usuarios.map((user) => ({
        id: user.IdUsuario,
        name: user.Nombre,
        identification: user.Cedula,
        email: user.CorreoElectronico,
        phone: user.Telefono,
        birthday: user.FechaNacimiento,
        registerDate: user.FechaRegistro,
        roles: user.Roles,
      }))
      console.log('formatedUsers', formatedUsers)
      setUsers(formatedUsers)
    } else {
      console.log('response', response.msg)
    }
  }
  return (
    <div id='user'>
      <div className='user'>
        <div className='user-content'>
          <div className='user-content-header'>
            <h1>Gestión de usuarios</h1>
          </div>

          <div className='user-content-body'>
            <CustomTable
              columns={COLUMNS}
              data={users}
              actions={(row) => [
                {
                  icon: <FontAwesomeIcon icon={faPencilAlt} size='xs' />,
                  title: 'Editar',
                },
                {
                  icon: <FontAwesomeIcon icon={faTrashAlt} size='xs' />,
                  title: 'Eliminar',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
