import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AuthorizationPage from './pages/AuthorizationPage'
import ChatPage from './pages/ChatPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<AuthorizationPage />} index />
          <Route element={<ChatPage />} path="/chat/:id" />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
