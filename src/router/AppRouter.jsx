import { Route, Routes, useLocation } from 'react-router-dom'
import { Dashboard, LandingPage, Login, User } from '../pages'
import { ROUTES } from '../utils/constanst'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<LandingPage />}>
        <Route index element={<Dashboard />} />
        <Route path={ROUTES.USER} element={<User />} />
      </Route>
    </Routes>
  )
}

// export const AppRouter = () => {
//   const location = useLocation()
//   return (
//     <Routes>
//       <Route path='/' element={<Login />} />
//       <Route path={ROUTES.DASHBOARD} element={<LandingPage />}>
//         <Route index element={<Dashboard />} />
//         <Route path={ROUTES.USER} element={<User />} />
//       </Route>
//     </Routes>

// <Routes location={location} key={location.pathname}>
// <Route path={ROUTES.ROOT} element={<LandingPage />}>
//   <Route index element={<Dashboard />} />
//   <Route path={ROUTES.LOGIN} element={<Login />} />

//   {/* RUTAS PROTEGIDAS */}
//   <Route element={<ProtectedRoute />}>
//     <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
//     <Route element={<ProtectedRoute requiredRole={Role.Admin} />}>
//       <Route path={ROUTES.ROLE} element={<RoleManagement />} />
//     </Route>
//   </Route>
// </Route>

// <Route path='*' element={<ErrorPage />} />
// </Routes>
//   )
// }
