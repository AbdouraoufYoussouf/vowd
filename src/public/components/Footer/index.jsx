import vowd from '../../assets/brands/logo-vowd.png'
import footerPeople from '../../assets/pictures/footer-people-m1.png'
import footerPeople2 from '../../assets/pictures/footer-people.png'
import {fab, faFacebook, faTwitter, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot, faAt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-footer.css'
import './t-footer.css'
import './d-footer.css'

const Footer = () => {

	return (
		<footer className='footer'>
			<h2 className='footer__fellow-me'>
				<span>Suivez
				</span> Moi...
			</h2>
			<div className='footer__link'>
				<FontAwesomeIcon className='footer__link__icon icon-fb' icon={(fab, faFacebook)} />
				<FontAwesomeIcon className='footer__link__icon icon-tw' icon={(fab, faTwitter)} />
				<FontAwesomeIcon className='footer__link__icon icon-lk' icon={(fab, faLinkedin)} />
				<FontAwesomeIcon className='footer__link__icon icon-gh' icon={(fab, faGithub)} />
				<FontAwesomeIcon className='footer__link__icon icon-yt' icon={(fab, faYoutube)} />
			</div>
            <img className='footer__logo-vowd' src={vowd} alt='logo-vowd' />
			<p className='footer__website'>
                <span lang="es">
                    <strong>
                        VOWD
                    </strong>
                </span>
                <br/> 
                <strong>
                    Simplement votre
                </strong>
                <br/>
                consultant en développement web
				<br/>
				& communication digitale
                <br/>
                siret: 94994281700014
                <br/>
			</p>
			<div className='footer__container-info'>
                <img className='picture-people' src={footerPeople} alt='people' />
                <img className='picture-people2' src={footerPeople2} alt='people' />
                <div className='footer__container-info__content'>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faLocationDot} 
                        />
                        <p className='footer__container-info__li__text'>
                            7 cours Albert Thomas
                            <br/>
                            69003 Lyon - France
                        </p>
                    </div>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faAt} 
                        />
                        <p className='footer__container-info__li__text'>
                            contact@vowd.fr
                            <br/>
                            aarondivi@gmail.com
                        </p>
                    </div>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faPhone} 
                        />
                        <p className='footer__container-info__li__text'>
                            (+33) 427 115 913
                            <br/>
                            (+33) 635 774 835
                        </p>
                    </div>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faGlobe} 
                        />
                        <p className='footer__container-info__li__text'>
                            https://www.vowd.fr/
                            <br/>
                            https://www.facebook.com/vowd/
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>
                    © 2023 - conception web par Aaron DIVIOKA
                </p>
            </div>	
		</footer>
	)
}
 
export default Footer