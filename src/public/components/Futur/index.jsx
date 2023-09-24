import { Link } from 'react-scroll'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import down from '../../assets/icons/double-arrow-down.png'
import desktop from '../../assets/pictures/desktop.png'
import pen from '../../assets/icons/pen.png'
import illustration from '../../assets/icons/illustration.png'
import responsive from '../../assets/icons/responsive.png'
import seo from '../../assets/icons/seo.png'
import hands from '../../assets/icons/hands.png'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-futur.css'
import './d-futur.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Futur = () => {

    const futurHeader = pagesHeadersArray.find(el => el.title === "3")
    const futurHeaderArray = []
    futurHeaderArray.push(futurHeader)

    const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: delay || .4,
                duration: duration || 3,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('#futur__container__work__header')
    }, [])

    useEffect(() => {
        slideInTop('#sp-1')
    }, [])

    useEffect(() => {
        slideInTop('#sp-2')
    }, [])

    useEffect(() => {
        slideInTop('#sp-3')
    }, [])

    useEffect(() => {
        slideInTop('#sp-4')
    }, [])

    useEffect(() => {
        slideInTop('#sp-5')
    }, [])

	return (
		<section id='futur' className='futur'>
            {futurHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    titleCol2={item.titleCol2}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={item.text1}
                    br1={item.br1 && <><br/><br/></>}
                    text2={item.text2}
                    br2={item.br2 && <><br/><br/></>}
                    text3={item.text3}
                    br3={item.br3 && <><br/><br/></>}
                    text4={item.text4}
                    br4={item.br4 && <><br/><br/></>}
                    text5={item.text5}
                    icon1={
                        item.icon1 && 
                        <FontAwesomeIcon
                        className='futur__icon' 
                        icon={faArrowTrendUp} 
                        />
                    }
                    arrowDown={
                        item.arrowDown && 
                        <Link to='services'>
                            <img className='arrow-down' src={down} alt='arrow-down'/>
                        </Link>
                    }
                />
            ))}
            <div className='futur__container'>
                <div className='futur__container__work'>
                    <img className='futur__container__work__desktop' src={desktop} alt='desktop-pic'/>
                    <h2 id='futur__container__work__header' 
                        className='futur__container__work__header'>
                        Travaillons 
                        <br/>
                        dès maintenant !
                    </h2>
                </div>
                <ul className='futur__container__content'>
                    <li>
                        <img className='pen' src={pen} alt='pen-logo'/>
                        <br/>
                        Parce que vos idées et idéaux sont spéciaux, 
                        ils doivent se traduire avec des mots pertinents 
                        ainsi que des images qui interpellent.
                        <br/> 
                        <span id='sp-1'>
                            Rédigeons vos textes et illustrons leurs contenus 
                            à l'aide de procédés mnémotechniques.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </li>
                    <li>
                        <img className='illustration' src={illustration} alt='illustration-logo'/>
                        <br/>
                        Parce que vous attachez une grande importance à la qualité 
                        et au dynamisme du design,&nbsp;
                        <br/> 
                        <span id='sp-2'>
                            Sublimons et animons votre interface avec une réflexion 
                            basée à la fois sur l’efficacité, 
                            le concept ainsi que les tendances graphiques actuelles.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </li>
                    <li>
                        <img className='responsive' src={responsive} alt='responsive-logo'/>
                        <br/>
                        Parce que les supports de visualisation sont toujours plus diversifiés, 
                        adaptons votre site au plus grand nombre des nouvelles technologies.
                        <br/> 
                        <span id='sp-3'>
                            Nous allons personnaliser avec précision la réactivité de votre site web 
                            et préserver la cohérence de chaque section. 
                        </span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </li>
                    <li>
                        <img className='seo' src={seo} alt='seo-logo'/>
                        <br/>
                        Parce que vos attentes en matière de SEO et d'accessibilité sont particulièrement
                        importantes,
                        <br/>
                        <span id='sp-4'>
                            Le plan test d’acceptation de votre projet
                            &nbsp;ainsi que le rapport d’analyse et d’optimisation sont à votre disposition. 
                        </span> 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </li>
                    <li>
                        <img className='hands' src={hands} alt='hands-logo'/>
                        <br/>
                        Parce que ma règle d’or est le contentement de mes clients !
                        <br/> 
                        <span id='sp-5'>
                            Je m'impose naturellement un niveau d'exigence exemplaire.
                        </span>
                    </li>
                </ul>
            </div>
		</section>
	)
}
 
export default Futur