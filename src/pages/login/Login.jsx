import './login.scss'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constanst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { userAuthenticate } from '../../api'
import { useApi } from '../../hooks/useApi'

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { callApi } = useApi()
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    user: false,
    password: false,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    // Elimina el error
    setErrors({
      ...errors,
      [e.target.name]: false,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {
      user: formData.user.trim() === '',
      password: formData.password.trim() === '',
    }

    setErrors(newErrors)

    if (newErrors.user || newErrors.password) return

    const userForm = {
      CorreoElectronico: formData.user,
      Clave: formData.password,
    }

    const response = await callApi(userAuthenticate(userForm))

    if (response.success) {
      sessionStorage.setItem('token', response.msg.Token)
      console.log('Datos enviados:', response)
      login({ name: formData.user, password: formData.password })

      navigate(ROUTES.DASHBOARD, { replace: true })
    } else {
      console.error('Usuario incorrecto')
    }
  }

  return (
    <div id='login'>
      <div className='login'>
        <div className='login-content'>
          <div className='login-content-left'>
            <div className='login-content-left-img'>
              <img src='src\assets\images\exchange.avif' />
            </div>
          </div>
          <div className='login-content-right'>
            <div className='login-content-right-body'>
              <div className='login-content-right-body-header'>
                <FontAwesomeIcon className='icon' icon={faCubes} size='2x' />
                <h1>Login</h1>
              </div>

              <div className='login-content-right-body-form'>
                <form onSubmit={handleSubmit}>
                  <div className='field'>
                    <TextField
                      id='outlined-basic'
                      label='Usuario'
                      variant='outlined'
                      fullWidth
                      name='user'
                      value={formData.user}
                      onChange={handleChange}
                      error={errors.user}
                      helperText={errors.user ? 'Campo requerido' : ''}
                    />
                  </div>

                  <div className='field'>
                    <TextField
                      id='outlined-password-input'
                      label='Contraseña'
                      type='password'
                      autoComplete='current-password'
                      fullWidth
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      error={errors.password}
                      helperText={errors.password ? 'Campo requerido' : ''}
                    />
                  </div>
                  <button className='principal-button' type='submit'>
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
