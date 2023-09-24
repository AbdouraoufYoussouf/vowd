import { useState } from "react"

// styles
import './m-cv-scrolling.css'

const CvScrolling = (props) => {

	const [isScroll, setIsScroll] = useState(false)

    const isScrollState = () => {
        setIsScroll(!isScroll)
    }

	return (
			
		<>
			<div 
				className='cv__container'
			>
				<div
					className={
					isScroll ?
					'cv__container__elevator__actif':
					'cv__container__elevator__inactif'
				}
				>
					<h5 className='cv__container__title'>
						{props.title1} 
					</h5>
					<ul className='cv__container__list'>
						{props.list1.map((item) => (
							<li key={item} li={item}>{item}</li>
						))}
					</ul>
					<h5 className='cv__container__title'>
						{props.title2} 
					</h5>
					<ul className='cv__container__list'>
						{props.list2.map((item) => (
							<li key={item} li={item}>{item}</li>
						))}
					</ul>
					<h5 className='cv__container__title'>
						{props.title3} 
					</h5>
					<ul className='cv__container__list'>
						{props.list3.map((item) => (
							<li key={item} li={item}>{item}</li>
						))}
					</ul>
					<h5 className='cv__container__title'>
						{props.title4} 
					</h5>
					<ul className='cv__container__list'>
						{props.list4.map((item) => (
							<li key={item} li={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<input
				type='submit'
				onClick={isScrollState}
				className="cv__container__button button"
				value={
				isScroll ?
				'Revenir à la page 1':
				'Aller à la page 2'
				}
			>
			</input>
		</>
	)

}
 
export default CvScrolling