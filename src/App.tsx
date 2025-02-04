import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import theme from 'theme'

import routesList from './routes/RoutesList'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routesList} />
    </ThemeProvider>
  )
}

export default App
