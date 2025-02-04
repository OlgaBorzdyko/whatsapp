//import App from 'App'
//import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import ChatPage from './components/AuthorizationResponse'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<ChatPage />)
