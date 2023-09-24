import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// styles
import './m-alert.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Alert = () => {

    const [alertClosed, setAlertClosed] = useState(true)

    const slideAlert = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || 2,
                duration: duration || 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideAlert('#alert')
    }, [])

    return (
        <div 
            id='alert' 
            className='alert-container'
            style={
                alertClosed ?
                {display: 'block'} : 
                {display: 'none'}
            }
        >
            <div 
                onClick={() => setAlertClosed(!alertClosed)}
                className='alert-container__closed' 
            >
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <header>
                <h1>Bonjour à tous</h1>
            </header>
            <p>
                Je suis Aaron, peut-être votre futur développeur web.
                Je vous informe que la vidéo explicative est en cours de réalisation.
                <br/><br/>
                Vous souhaitant une bonne navigation,
                <br/>
                Aaron
            </p>
        </div>
    )
}

export default Alert