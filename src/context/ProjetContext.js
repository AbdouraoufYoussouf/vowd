import React, { createContext, useState } from 'react'
import { getAllProjets, deleteProjet } from '../services/projetServices'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projets, setProjets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem('token')

  // Récupérer tous les projets
  const fetchProjets = async () => {
    if (token) {
      try {
        const data = await getAllProjets(token)
        setProjets(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error)
      } finally {
        setIsLoading(false); // Fin du chargement, quelle que soit l'issue
      }
    }
  };

  // Supprimer un projet
  const handleDeleteProjet = async (projetId) => {
    if (token) {
      try {
        await deleteProjet(projetId, token)
        // Mettez à jour la liste des projets localement en la filtrant pour exclure le projet supprimé
        setProjets((prevProjets) =>
          prevProjets.filter((projet) => projet._id !== projetId)
        );
      } catch (error) {
        console.error('Erreur lors de la suppression du projet :', error)
      }
    }
  };

  return (
    <ProjectContext.Provider value={{ projets, isLoading,setIsLoading,fetchProjets, handleDeleteProjet }}>
      {children}
    </ProjectContext.Provider>
  );
};
