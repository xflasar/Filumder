import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './pages/Homepage.tsx'
import './assets/index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>,
)
