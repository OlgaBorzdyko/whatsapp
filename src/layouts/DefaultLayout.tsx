import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'

const DefaultLayoutRoot = styled('div')(() => ({
  backgroundImage: 'url(/whatsapp-bg2.png)',
  display: 'grid',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
}))

const DefaultLayout = () => (
  <DefaultLayoutRoot>
    <Outlet />
  </DefaultLayoutRoot>
)

export default DefaultLayout
