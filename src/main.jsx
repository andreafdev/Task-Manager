import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import App from './App'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>
},

{
  path: '/task',
  element: < TaskPage />
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
