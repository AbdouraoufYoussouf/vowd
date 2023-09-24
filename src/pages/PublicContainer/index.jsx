import Background from '../../public/components/Background'
import Header from '../../public/components/Header'
import Banner from '../../public/components/Banner'
import About from '../../public/components/About'
import LetsTalk from '../../public/components/LetsTalk'
import Futur from '../../public/components/Futur'
import Services from '../../public/components/Services'
import Portfolio from '../../public/components/Portfolio'
import Contact from '../../public/components/Contact'
import Footer from '../../public/components/Footer'
import Alert from '../../public/components/Alert'

const PublicContainer = () => {

	window.onload = () => {
		localStorage.removeItem('token')
		window.scrollTo(0, 0)
	}

	return (
		<>
			<main>
				<Header />
				<Banner />
				<About />
				<LetsTalk />
				<Futur />
				<Services />
				<Portfolio />
				<Contact />
				<Background />
				<Footer />
			</main>
			<Alert />
		</>
	) 
}
 
export default PublicContainer