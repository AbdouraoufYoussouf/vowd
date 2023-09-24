import { faHandHolding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-pages-headers.css'

const PagesHeaders = (props) => { 

    return (
        <div className='title-container'>
            <h2 id='title' className='title'>
                <span>{props.titleCol1}
                </span>{props.titleCol2}
            </h2>
            <h3 className='sub-title'>
                {props.subTitle1}
                <br/>
                {props.subTitle2}
            </h3>
            <div className='underline'></div>
            <p className='paragraph'>
                {props.text1}
                {props.br1}
                {props.text2}
                {props.br2}
                {props.text3}
                {props.br3}
                {props.text4}
                {props.br4}
                {props.text5}
            </p>
            <div className='container-icons'>
                <div>{props.icon1}</div>
                <FontAwesomeIcon 
                    className='faHandHolding' 
                    icon={faHandHolding} 
                />
            </div>
            <div>{props.arrowDown}</div>
        </div>
    )        
}

export default PagesHeaders