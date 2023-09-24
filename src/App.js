import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicRouter from './routes/PublicRouter'
import AdminRouter from './routes/AdminRouter'
import Error from './_utils/Error'
import ScrollToTop from './functions/ScrollToTop'

// styles
import './styles/m-app.css'
import './styles/t-d-app.css'

const App = () => {
    window.onload = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Routes>
                <Route exact path='/*' element={<PublicRouter />} />
                <Route path='/dashboard/*' element={<AdminRouter />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <ScrollToTop />
        </div>
    )
}

export default App