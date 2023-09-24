import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import me from '../../assets/pictures/me.jpg'
import me2 from '../../assets/pictures/me2.jpg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-services.css'
import './d-services.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Services = () => {

    const servicesHeader = pagesHeadersArray.find(el => el.title === "4")
    const servicesHeaderArray = []
    servicesHeaderArray.push(servicesHeader)

    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || .5,
                duration: duration || 2,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('#block-1')
    }, [])

    useEffect(() => {
        slideInTop('#block-2')
    }, [])

    useEffect(() => {
        slideInTop('#block-3')
    }, [])

	return (
		<section id='services' className='services'>
            {servicesHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={item.text1}
                    br1={item.br1 && <><br/><br/></>}
                    text2={item.text2}
                    icon1={
                        item.icon1 && 
                        <FontAwesomeIcon
                        className='services__icon' 
                        icon={faStar} 
                        />
                    }
                />
            ))}
            <div className='sevices__container'>
                <div className='sevices__container--fixe-position'>
                    <div className='services__container__blocks'>
                        <div id='block-1' className='block'>
                            <h2>1</h2>
                            <div className='block-paragraph'>
                                <p className='block-paragraph__header'>
                                    Versement de 20%
                                    <br/>
                                    <br/>
                                    Démarrage du projet
                                    <br/>
                                </p>
                                <p className='block-paragraph__text'>
                                    Les frais de dossier, de déplacement en France
                                    ainsi que les prises de photos... 
                                    <span>sont inclus</span>.
                                </p>
                            </div>
                        </div>
                        <div id='block-2' className='block'>
                            <h2>2</h2>
                            <div className='block-paragraph'>
                                <p className='block-paragraph__header'>
                                    Facilités de paiement
                                    <br/>
                                    <br/>
                                    jusqu' à 5 fois sans frais
                                    <br/>
                                </p>
                                <p className='block-paragraph__text'>
                                    <span>*Remise execeptionnelle de 10% </span>
                                    pour tout règlement n'excédant pas 2 échéances.
                                </p>
                            </div>
                        </div>
                        <div id='block-3' className='block'>
                            <h2>3</h2>
                            <div className='block-paragraph'>
                                <p className='block-paragraph__header'>
                                    Le site vous appartient à 100%
                                    <br/>
                                    <br/>
                                    mise à jour à partir de 20€ / mois
                                    <br/>
                                </p>
                                <p className='block-paragraph__text'>
                                    Le site est déployé sur le web à j+15 de sa finission.
                                    <br/>
                                    <span>
                                        Les codes d'accès sont à vous 
                                    </span> à terme de l'échéancier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='services__container__picture' src={me} alt='congratulation' />
                <img className='services__container__picture2' src={me2} alt='congratulation' />
            </div>
		</section>
	)
}
 
export default Services