import {
  faChartColumn,
  faCircleUser,
  faCubesStacked,
  faFileLines,
  faMoneyBill,
  faPlus,
  faThList,
  faUser,
  faUserAlt,
  faUserGear,
  faUsers,
  faUsersGear,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'

export const ROUTES = {
  DASHBOARD: '/dashboard',
  USER: 'mantenimiento-usuarios',
}

export const MENUITEMS = [
  { name: 'Inicio', route: ROUTES.DASHBOARD },
  { name: 'Usuarios', route: ROUTES.USER },
  { name: 'Clientes', route: '' },
  // { name: 'API', route: ROUTES.API },
  // { name: 'Productos', route: '/products' },
  // { name: 'Sobre nosotros', route: '/aboutus' },
  // { name: 'Contacto', route: '/contact' },
]

export const GENERALINFO = [
  {
    icon: faUsersGear,
    title: 'Administración de Clientes',
    text: 'Gestiona la información de los clientes para mantener un orden y ofrecer un mejor servicio',
    route: ROUTES.USER,
  },
  {
    icon: faUserGear,
    title: 'Mantenimiento de Usuarios',
    text: 'Crea, edita y administra los perfiles de los usuarios con distintos roles y permisos',
    route: ROUTES.USER,
  },
  {
    icon: faCubesStacked,
    title: 'Gestión de Inventario',
    text: 'Controla y actualiza el stock de productos en tiempo real, evitando faltantes o excedentes',
    route: ROUTES.USER,
  },
  {
    icon: faMoneyBill,
    title: 'Control de Abonos',
    text: 'Registra y gestiona los pagos y abonos pendientes de los clientes de forma organizada',
    route: ROUTES.USER,
  },
  {
    icon: faWarehouse,
    title: 'Bodegas',
    text: 'Visualiza gráficos detallados para entender el rendimiento de las ventas y tomar mejores decisiones',
    route: ROUTES.USER,
  },
  {
    icon: faUsersGear,
    title: 'Proveedores',
    text: 'Visualiza gráficos detallados para entender el rendimiento de las ventas y tomar mejores decisiones',
    route: ROUTES.USER,
  },
  {
    icon: faFileLines,
    title: 'Ventas',
    text: 'Visualiza gráficos detallados para entender el rendimiento de las ventas y tomar mejores decisiones',
    route: ROUTES.USER,
  },
  {
    icon: faChartColumn,
    title: 'Reportes y Estadísticas',
    text: 'Visualiza gráficos detallados para entender el rendimiento de las ventas y tomar mejores decisiones',
    route: ROUTES.USER,
  },
]
