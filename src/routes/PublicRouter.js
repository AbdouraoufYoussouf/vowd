import React from 'react'
import {Routes, Route } from 'react-router-dom'
import PublicContainer from '../pages/PublicContainer'
import VideoVowd from '../public/components/VideoVowd'
import Error from '../_utils/Error'
import { LocalStorageProvider } from '../context/LocalStorageContext'

const PublicRouter = () => {
    
    return (
        <LocalStorageProvider>
            <Routes>
                <Route element={ <PublicContainer /> }>
                    <Route index element={ <PublicContainer /> } />
                    <Route path='/*' element={ <PublicContainer /> } />
                </Route>
                <Route path='videovowd/*' element={ <VideoVowd /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        </LocalStorageProvider>
    ) 
}

export default PublicRouter