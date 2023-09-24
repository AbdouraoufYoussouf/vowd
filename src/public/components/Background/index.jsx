import keyboard from '../../assets/pictures/keyboard.jpg'

// styles
import './m-background.css'
import './d-background.css'

const Background = () => {

	return (
		<div className='background'>
			<img className='keyboard' src={keyboard} alt='keyboard' />
		</div>
	)
}
 
export default Background