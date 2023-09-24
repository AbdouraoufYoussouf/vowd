import { Link } from 'react-router-dom'
import failled from '../../public/assets/brands/logo-vowd-error.png'

// styles
import './m-error.css'
import './d-error.css'

const Error = () => {

	return (
        <section className='error'>
            <h1 className='error__statut'>404</h1>
            <img className='error__failled' src={failled} alt='logo-vowd-falled'/>
            <h2 className='error__subheader'>Oups! Une erreur est survenue!</h2>
            <Link className='error__link' to='/monSite'>
                <p>
                    Retour au site
                </p>
            </Link>
        </section>
	)
}
 
export default Error