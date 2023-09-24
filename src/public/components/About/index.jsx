import { Link } from 'react-scroll'
import { useState } from 'react'
//import $ from 'jquery';
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import cvHeadingArray from '../../datas/cvHeadingArray.json'
import CvScrolling from '../../components/CvScrolling'
import PagesHeaders from '../../components/PagesHeaders'
import Uploader from '../../../functions/Uploader'
import about from '../../assets/pictures/about.jpg'
import toulouse from '../../assets/pictures/toulouse.jpg'
import montain from '../../assets/pictures/montain.jpg'
import tree from '../../assets/pictures/tree.jpg'
import trees from '../../assets/pictures/trees.png'
import down from '../../assets/icons/double-arrow-down.png'
import { faArrowLeft, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-about.css'
import './d-about.css'

const About = () => {
    
    const aboutHeader = pagesHeadersArray.find(el => el.title === "1")
    const aboutHeaderArray = []
    aboutHeaderArray.push(aboutHeader)

    const [isOpenHistory, setIsOpenHistory] = useState(false)
    const [isOpenValues, setIsOpenValues] = useState(false)
    const [isOpenCV, setIsOpenCV,] = useState(false)

	const isOpenHistoryState = () => {
        setIsOpenHistory(!isOpenHistory)
        if (isOpenHistory === false) {
            document.getElementById('values').style.display = 'none'
            document.getElementById('cv').style.display ='none'
        } 
        else {
            document.getElementById('values').style.display = 'block'
            document.getElementById('cv').style.display ='block'
        }
    }

    const isOpenValuesState = () => {
        setIsOpenValues(!isOpenValues)
        if (isOpenValues === false) {
            document.getElementById('history').style.display = 'none'
            document.getElementById('cv').style.display ='none'
        } 
        else {
            document.getElementById('history').style.display = 'block'
            document.getElementById('cv').style.display ='block'
        }
    }

    const isOpenCVState = () => {
        setIsOpenCV(!isOpenCV)
        if (isOpenCV === false) {
            document.getElementById('history').style.display = 'none'
            document.getElementById('values').style.display ='none'
        } 
        else {
            document.getElementById('history').style.display = 'block'
            document.getElementById('values').style.display ='block'
        }
    }

	return (
		<section id='about' className='about'>
            {aboutHeaderArray.map((item, index) => (
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
                        className='about__icon' 
                        icon={faUsers} 
                        />
                    }
                    arrowDown={
                        item.arrowDown && 
                        <Link to='letsTalk'>
                            <img className='arrow-down' src={down} alt='arrow-down'/>
                        </Link>
                    }
                />
            ))}
            <article id='about__article' className='about__article'>
                <div className='about__article__container'>
                    <img className='about__article__container__picture' src={about} alt='man' />
                    <p className='about__article__container__regard'>
                        Simplement votre web developpeur,
                        <br/>
                        Aaron DIVIOKA
                    </p>
                </div>
                <menu 
                    className={
                        (isOpenHistory ||
                        isOpenValues ||
                        isOpenCV) ? 
                        'about__article__menu about__article__menu--open':
                        'about__article__menu about__article__menu--closed'
                    }>
                    <Link to='about__article'
                            onClick={isOpenHistoryState} 
                            id='history'
                            className={
                                isOpenHistory ?
                                'about__article__menu__title--open about__article__menu__title--open-history':
                                'about__article__menu__title--closed about__article__menu__title--closed-history'
                            }>
                            Histoire
                    </Link>
                    <Link to='about__article'
                        onClick={isOpenValuesState} 
                        id='values'
                        className={
                            isOpenValues ?
                            'about__article__menu__title--open about__article__menu__title--open-values':
                            'about__article__menu__title--closed about__article__menu__title--closed-values'
                        }>
                        Softskills
                    </Link>
                    <Link to='about__article'
                        onClick={isOpenCVState} 
                        id='cv'
                        className={
                            isOpenCV ?
                            'about__article__menu__title--open about__article__menu__title--open-cv':
                            'about__article__menu__title--closed about__article__menu__title--closed-cv'
                        }>
                        CV
                    </Link>
                </menu>
                <div className='about__article__ref'>
                    <h3 className='about__article__ref__title'>Références</h3>
                    <div className='about__article__ref__star'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='about__article__ref__text'>
                        <br/>
                            " ... A cette occasion, il a fait preuve de beaucoup de compétences et l'efficacité de son travail nous a grandement satisfait ... "
                        <br/>
                        <br/>
                            " ... Monsieur Aaron DIVIOKA a toujours été une personne fiable et responsable tant dans son travail, tant dans ses rapports avec ses collègues ... "
                        <br/>
                        <br/>
                            " ... Nous souhaitions donc le remercier de sa curiosité ainsi que son implication dans son travail journalier. C'est pourquoi nous vous recommandons fortement les services de Monsieur Aaron DIVIOKA ... "
                        <br/>
                        <br/>
                            " ... Nous sommes convaincus qu'il peut être un atout appréciable dans votre entreprise ... "
                        <br/>
                        <br/>
                        <br/>
                    </p>
                    <p className='about__article__ref__name'>
                        Bertrand MEUNIER, 
                    <br/>
                        Responsable réseau Hlanders
                    </p>
                    <img 
                        className='about__article__ref__pic2 pic2' 
                        src={trees} alt='forest' 
                    />
                    <Uploader />
                </div>
                <div
                    id='history-collapse'
                    className={
                        isOpenHistory ?
                        'about__article__collapse--background about__article__collapse__history about__article__collapse about__article__collapse--open':
                        'about__article__collapse--background about__article__collapse__history about__article__collapse about__article__collapse--closed'
                }>
                    <div className='about__article__collapse__history__text__pic-container pic-container'>
                        <img 
                            className='about__article__collapse__history__text__pic pic' 
                            src={toulouse} alt='canal-du-midi' 
                        />
                    </div>
                    <p className='about__article__collapse__history__text text'>
                        Originaire de Haute Garonne, et alors que je poursuivais l'objectif d'obtenir un Baccalauréat économique et social, les épreuves de la vie m'ont amenées à me réorienter vers un cursus professionnel pour subvenir rapidement à mes besoins. 
                        <br/>
                        <br/>
                        C’est ainsi qu’un BEP VAM en poche, avec la détermination et la rigueur que je m’impose au travail, des postes de responsable commercial et de magasin m’ont été confiés pendant plus de 20 ans. 
                        <br/>
                        <br/>
                        Parallèlement, mon attrait de longue date pour la programmation informatique et ses nouvelles technologies m’amène depuis 7 ans à développer mes propres applications Web en autodidacte. Coder est rapidement devenu une passion, et s’est révélé à moi comme une évidence pour la poursuite de ma carrière.
                        <br/>
                        <br/>
                        En janvier 2022, j'ai lancé mon projet de reconversion professionnelle dans le secteur IT.
                        <br/>
                        <br/>
                        Valider la formation de Développeur Web proposé par OpenClassrooms m’a permis d’optimiser et de valoriser mes savoir-faire.
                        <br/>
                        <br/>
                        Désormais, je m’applique à associer mon pragmatisme à mes compétences numériques.
                        <br/>
                        <br/>
                        Fédérer et diriger à long terme une équipe de développeurs, au sein de laquelle je serai votre interlocuteur privilégié à chaque étape d'avancement de vos projets de grandes envergures, sera l'accomplissement de toutes mes années de dévouement au travail. 
                    </p>
                    <img 
                        className='about__article__collapse__history__text__pic2 pic2' 
                        src={trees} alt='forest' 
                    />
                    <Link to='about__article'>
                        <>
                            <FontAwesomeIcon 
                                onClick={isOpenHistoryState}  
                                className={
                                    isOpenHistory ? 
                                'arrow-back arrow-back--open':
                                'arrow-back arrow-back--closed'
                            } 
                            icon={faArrowLeft} 
                            />
                        </>
                    </Link>
                </div>
                <div
                    id='values-collapse' 
                    className={
                        isOpenValues ?
                        'about__article__collapse--background about__article__collapse__values about__article__collapse about__article__collapse--open':
                        'about__article__collapse--background about__article__collapse__values about__article__collapse about__article__collapse--closed'
                }>
                    <div className='about__article__collapse__values__text__pic-container pic-container'>
                        <img 
                            className='about__article__collapse__values__text__pic pic' 
                            src={montain} alt='montain' 
                        />
                    </div>
                    <p className='about__article__collapse__values__text text'>
                        De nature avenante et sociable, j’éprouve une réelle satisfaction dans le contact humain, et veille à prêter toujours une bienveillante attention à l’égard de mes collèges et ou collaborateurs.   
                        De même que respect, intégrité et loyauté constituent mes valeurs fondamentales.
                        <br/>
                        <br/>
                        Appliqué et impliqué au quotidien, je m’assure du bon déroulement des missions et projets dont j’ai la responsabilité. 
                        Je m’impose naturellement un niveau d’exigence exemplaire sur toutes mes réalisations et prête une attention particulière au feed-back qui en découle.
                        <br/>
                        <br/>
                        Ma détermination et ma réactivité me permettent de faire face avec lucidité à toutes situations difficiles ou imprévues.
                        <br/>
                        <br/>
                        Animé par ma créativité, je sais être à l’initiative de propositions de solutions toujours plus innovantes.
                        <br/>
                        <br/>
                        Humble devant mes modèles et mentors, j’attise au travers de leur enseignement toute ma motivation et ma curiosité.
                        <br/>
                        <br/>
                        Enfin, j'aime ces citations :
                        <br/>
                        <br/>
                        <i>
                        « Ceux qui aiment à s’instruire ne sont jamais oisifs. Quoique je ne sois chargé d’aucune affaire importante, je suis cependant dans une occupation continuelle... »
                        </i>
                        <br/>
                        <br/>
                        <strong>
                        —Montesquieu
                        </strong>
                        <br/>
                        <br/>
                        <i>
                        « Quand je suis allé à l'école, ils m'ont demandé ce que je voulais être quand je serai grand. J'ai répondu : "Heureux". Ils m’ont dit que je n’avais pas compris la question, j’ai répondu qu’ils n’avaient pas compris la vie. »
                        </i>
                        <br/>
                        <br/>
                        <strong>
                        —Jhon Lennon
                        </strong>
                        <br/>
                        <br/>
                        <i>
                        « Nos problèmes ont été créés par l'homme et nous pouvons donc les résoudre. Nos possibilités ne connaissent pas de limites. Aucun problème humain ne va au delà de nos capacités. »
                        </i>
                        <br/>
                        <br/>
                        <strong>
                        —John Fitzgerald Kennedy
                        </strong>
                    </p>
                    <img 
                        className='about__article__collapse__value__text__pic2 pic2' 
                        src={trees} alt='forest' 
                    />
                    <Link to='about__article'>
                        <div>
                            <FontAwesomeIcon 
                                onClick={isOpenValuesState}  
                                className={
                                isOpenValues ? 
                                'arrow-back arrow-back--open':
                                'arrow-back arrow-back--closed'
                                } 
                                icon={faArrowLeft} 
                            />
                        </div>
                    </Link>
                </div>
                <div
                    id='cv-collapse' 
                    className={
                        isOpenCV ?
                        'about__article__collapse--background about__article__collapse__cv about__article__collapse about__article__collapse--open':
                        'about__article__collapse--background about__article__collapse__cv about__article__collapse about__article__collapse--closed'
                }>
                    <div className='about__article__collapse__cv__text__pic-container pic-container'>
                        <img 
                            className='about__article__collapse__cv__text__pic pic' 
                            src={tree} alt='beautiful-tree' 
                        />
                    </div>
                    <div className='about__article__collapse__cv__container'>
                        <img 
                            className='about__article__collapse__cv__container__picture' 
                            src={about} 
                            alt='man2' 
                        />
                        <h4 className='about__article__collapse__cv__container__name'>Aaron<br/>DIVIOKA</h4>
                        <p className='about__article__collapse__cv__container__statut'>Développeur web</p>
                        <p className='about__article__collapse__cv__container__phone'>
                            (+31)635 774 835
                        </p>
                        <p className='about__article__collapse__cv__container__mail'>
                            aarondivi@gmail.com
                        </p>
                        <p className='about__article__collapse__cv__container__certification'>
                            <span>
                                <strong>
                                    + de 7 années de pratique 
                                </strong>
                            </span>
                            <br/>
                            ainsi qu' une certification RNCP
                            <br/>
                            OpenClassrooms - 2022 
                        </p>
                        {cvHeadingArray.map((itemList, index) => (
                        <CvScrolling 
                            key={index}
                            title1={itemList.title1}
                            title2={itemList.title2}
                            title3={itemList.title3}
                            title4={itemList.title4}
                            list1={itemList.list1}
                            list2={itemList.list2}
                            list3={itemList.list3}
                            list4={itemList.list4}
                        />
                        ))}
                    </div>
                    <Link to='about__article'>
                        <div>
                            <FontAwesomeIcon 
                                onClick={isOpenCVState}  
                                className={
                                isOpenCV ? 
                                'arrow-back arrow-back--open':
                                'arrow-back arrow-back--closed'
                            } 
                            icon={faArrowLeft} 
                            />
                        </div>
                    </Link>
                    <img 
                        className='about__article__collapse__cv__text__pic2 pic2' 
                        src={trees} alt='forest' 
                    />
                </div>
            </article>
		</section>
	)
}

export default About