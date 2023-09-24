import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/projets`;

export const getAllProjets = async (token) => {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(API_URL, { headers });
        const projets = response.data;
        return projets;
    } catch (error) {
        console.log('error lors de la récupération des projets:', error)
        return error;
    }
};


// Obtenir un projet par son email pour verifier si un email exist ou pas
export const getProjetByEmail = async (email) => {
  try {
    
   const exist = await axios.get(`${API_URL}/exist?email=${email}`);
   return exist;
  } catch (error) {
    return error;
  }
};
// Supprimer un projet par son ID
export const deleteProjet = async (projetId, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
     
    };
    await axios.delete(`${API_URL}/delete?projetId=${projetId}`, { headers });
  } catch (error) {
    console.error('Erreur lors de la suppression du projet :', error);
    return error;
  }
};


export const createProjet = async (projetData) => {
    const projetToCreate = {
      "society": projetData.society,
      "siret": projetData.siret,
      "firstName": projetData.firstName,
      "lastName": projetData.lastName,
      "email": projetData.email,
      "projet": projetData.projet,
      "budget": projetData.budget,
      "delai": projetData.delai,
      "message": projetData.message
    };
  
    try {
      const response = await axios.post(API_URL, projetToCreate);
      console.log("response:",response)
      if (response.status === 200) {
        // Succès de la création du projet
        return { success: true, data: response.data };
      } else {
        // Le serveur a renvoyé une réponse avec un code d'erreur
        return { success: false, error: 'Une erreur est survenue lors de la demande.' };
      }
    } catch (error) {
      if (error.response) {
        // Le serveur a renvoyé un code d'erreur
        const responseData = error.response.data;
        if (responseData && responseData.error && responseData.error.length > 0) {
          const errorMessages = responseData.error.map((error) => error.msg);
          console.log('les erreurs:',errorMessages)
          return { success: false, errorMessages };
        } else {
          return { success: false, error: 'Une erreur est survenue lors de la demande.' };
        }
      } else if (error.request) {
        // La requête elle-même a échoué
        console.log('error:',error)
        return { success: false, error: 'La requête n\'a pas pu être envoyée.' };
      } else {
        // Une erreur inattendue s'est produite
        return { success: false, error: 'Une erreur inattendue s\'est produite.' };
      }
    }
  };
