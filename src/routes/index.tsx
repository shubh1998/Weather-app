import { BrowserRouter as Router } from 'react-router-dom'

import CustomRoutes from './routes'

export const AppRoutes = () => {
  return (
    <Router>
      <CustomRoutes />
    </Router>
  )
}
