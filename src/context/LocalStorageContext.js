import { createContext, useEffect, useState } from "react"

export const LocalStorageContext = createContext()

export const LocalStorageProvider = ({ children }) => {
    const [localData, setLocalData] = useState({
        projet: 'N/R',
        budget: 'N/R',
        delai: 'N/R',
        message: '',
    });
    const [isReload, setIsReload] = useState(false)

    // Fonction pour sauvegarder les données dans le localStorage
    const saveDataToLocalStorage = (inputMessage, projet, delai, budget) => {
        localStorage.setItem('message', inputMessage)
        localStorage.setItem('projet', projet)
        localStorage.setItem('delai', delai)
        localStorage.setItem('budget', budget)
    }

    // Fonction pour supprimer les données du localStorage
    const deleteDataFromLocalStorage = () => {
        localStorage.removeItem('message')
        localStorage.removeItem('projet')
        localStorage.removeItem('delai')
        localStorage.removeItem('budget')
    }

    // Fonction pour récupérer les données du localStorage
    const getDataFromLocalStorage = () => {
        const projet = localStorage.getItem('projet')
        const budget = localStorage.getItem('budget')
        const delai = localStorage.getItem('delai')
        const message = localStorage.getItem('message')

        // Utilisez ces données comme vous le souhaitez, par exemple, en les stockant dans votre state local
        setLocalData({
            projet: projet || 'N/R',
            budget: budget || 'N/R',
            delai: delai || 'N/R',
            message: message || '',
        })
    }

    useEffect(() => {
        getDataFromLocalStorage()
        
    }, [])


    return (
        <LocalStorageContext.Provider value={{ isReload, setIsReload, localData, getDataFromLocalStorage, saveDataToLocalStorage, deleteDataFromLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    )
}
