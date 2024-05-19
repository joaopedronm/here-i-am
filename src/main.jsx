import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Pages
import App from './App.jsx'
import Apis from './pages/Apis/Apis.jsx'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: 'apis',
    element: <Apis />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
