import { Outlet } from 'react-router-dom'
import { Menu } from '../../components'
import { useAuth } from '../../context/auth'

export const LandingPage = () => {
  const { user, logout } = useAuth()
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

{
  /* {user ? (
  <>
    <h2>Bienvenido, {user.name}!</h2>
    <button onClick={logout}>Cerrar sesión</button>
  </>
) : (
  <h2>No has iniciado sesión</h2>
)} */
}
