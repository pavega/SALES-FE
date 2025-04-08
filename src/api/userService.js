import { api } from './axiosConfig'

export const userAuthenticate = (data) => {
  return () =>
    api
      .post('/Usuario/GetUser', data)
      .then((response) => response.data)
      .catch(() => ({ success: false, msg: 'Error en la solicitud' }))
}

export const getUsers = () => {
  return () =>
    api
      .get('/Usuario/ObtenerUsuarios')
      .then((response) => response.data)
      .catch(() => ({ success: false, msg: 'Error en la solicitud' }))
}
