import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth/login`; // Remplacez par l'URL de votre API


export const login = async (email, password) => {
    
    try {
        const credentials = `${email}:${password}`;
        const base64Credentials = btoa(credentials); // Encodage en Base64
        
      const response = await axios.post(
        API_URL,
        {},
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
          },
        }
      );

        //console.log(response)
        console.log(response)
        return {success:true,response};
    } catch (error) {
        console.error('Erreur de connexion :', error);
        return {success:false,error:error.response};
    }
};

