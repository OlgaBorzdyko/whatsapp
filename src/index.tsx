import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from 'App'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
