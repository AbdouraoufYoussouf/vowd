import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import me from '../../assets/pictures/me.jpg'
import me2 from '../../assets/pictures/me2.jpg'
import walle from '../../assets/pictures/wall-e.jpg'
import walle2 from '../../assets/pictures/wall-e2.jpg'
import nature from '../../assets/pictures/nature.jpg'
import nature2 from '../../assets/pictures/nature2.jpg'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-banner.css'
import './d-banner.css'

const Banner = () => {

	const [currentState, setCurrentState] = useState(0)

	useEffect(()=> {
		const timer = setTimeout(() => {
			if (currentState === 2) {
				setCurrentState(0)
			}
			else {
				setCurrentState(currentState +1)
			}
		}, 5000)
		return () => clearTimeout(timer)
	}, [currentState] )

	const slideArray = [
		{	
			"img": `${me}`
		},
		{
			"img": `${walle}`
		},
		{
			"img": `${nature}`
		}
	]

	const slideArray2 = [
		{	
			"img": `${me2}`
		},
		{
			"img": `${walle2}`
		},
		{
			"img": `${nature2}`
		}
	]

	return (
		<>
			<section id='banner' className='banner'>
				<h1 className='banner__title'>
					<span lang="es" className='banner__title-v'>V</span>
					<span lang="es" className='banner__title-o'>O</span>
					tre
					<br/>
					<span lang="es" className='banner__title-w'>W</span>
					eb
					<br/>
					<span lang="es" className='banner__title-d'>D</span>
					ev.
				</h1>
				<Link  className='banner__button' to='/monSite/videovowd'>
					<FontAwesomeIcon 
						className='banner__button__btn' 
						icon={faCirclePlay} 
					/>
					<p className='banner__button__text'>
						Tout savoir
						<br/>
						en 5 minutes
					</p>
				</Link>
				<h2 className='banner__subtitle'>Simplement votre !</h2>
				<div> 
					{slideArray.map((items, index) => (
						<div key={index}>
							<img className={index === currentState ? 'banner__picture banner__picture--in' : 'banner__picture banner__picture--out'}
							src={items.img} 
							alt='slide' />
						</div>
					))}
				</div>
				<div> 
					{slideArray2.map((items, index) => (
						<div key={index}>
							<img className={index === currentState ? 'banner__picture2 banner__picture--in' : 'banner__picture2 banner__picture--out'}
							src={items.img} 
							alt='slide' />
						</div>
					))}
				</div>
			</section>
		</>
	)
}
 
export default Banner