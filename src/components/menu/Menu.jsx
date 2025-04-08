import './menu.scss'
import _ from 'lodash'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MENUITEMS, ROUTES } from '../../utils/constanst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

export const Menu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <FontAwesomeIcon
          className='icon-color'
          icon={faCubes}
          size='2x'
          onClick={() => navigate(ROUTES.DASHBOARD, { replace: true })}
        />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {_.map(MENUITEMS, (item) => (
              <li key={item.name} className='nav-item'>
                <Link
                  to={item.route}
                  className={`nav-link ${
                    location.pathname === item.route ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
