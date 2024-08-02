import { createBrowserRouter } from 'react-router-dom'

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    }
  ]
)

export default router
