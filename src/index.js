import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import './styles/index.css'
import './styles/Normalize.css'

import { AuthProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
         <ToastContainer  />
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </React.StrictMode>
)