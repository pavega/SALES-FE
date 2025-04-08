import './dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'
import { GENERALINFO } from '../../utils/constanst'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route, { replace: true })
    console.log('ENTRA', route)
  }

  return (
    <div id='dashboard'>
      <div className='dashboard'>
        <div className='dashboard-content'>
          {/* <div className='dashboard-content-body'>
            <div className='dashboard-content-body-left'>
              <h1>Sistema de ventas e inventario</h1>
              <p>
                Herramienta para la gestión de ventas e inventarios de manera
                rápida, segura y sencilla. Facilita el control del stock y la
                administración de ventas, ayudando a tomar decisiones más
                precisas y eficientes
              </p>
              <button className='principal-button'>Ver más</button>
            </div>

            <div className='dashboard-content-body-right'>
              <div className='dashboard-content-body-right-img'>
                <img src='src\assets\exchange.avif' />
              </div>
            </div>
          </div> */}

          <div className='dashboard-content-footer'>
            <div className='dashboard-content-footer-container'>
              {_.map(GENERALINFO, (item) => (
                <div
                  key={item.title}
                  className='dashboard-content-footer-container-item'
                  onClick={() => handleNavigation(item.route)}
                >
                  <FontAwesomeIcon
                    className='dashboard-content-footer-container-item-icon'
                    icon={item.icon}
                  />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              ))}

              {/* <div className='dashboard-content-footer-container-item custom-item'>
                <FontAwesomeIcon
                  className='dashboard-content-footer-container-item-icon'
                  icon={faPlus}
                />
                <h6>Y más</h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
