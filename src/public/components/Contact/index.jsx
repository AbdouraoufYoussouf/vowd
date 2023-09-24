import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import ContactForm from '../../../functions/ContactForm'
import contact from '../../assets/pictures/contact.jpg'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-contact.css'
import './d-contact.css'

const Contact = () => {

    const contactHeader = pagesHeadersArray.find(el => el.title === "7")
    const contactHeaderArray = []
    contactHeaderArray.push(contactHeader)

	return (
		<section id='contact' className='contact'>
            {contactHeaderArray.map((item, index) => (
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
                        className='contact__icon-phone1' 
                        icon={faPhone} 
                        />
                    }
                />
            ))}
            <img id='contact__picture' className='contact__picture' src={contact} alt='man' />
            <ContactForm />
		</section>
	)
}
 
export default Contact