import { useContext, useEffect, useState } from 'react'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LocalStorageContext } from '../../context/LocalStorageContext'
import { notifyError } from '../../context/Notify'

// styles
import './m-business-form.css'

const BusinessForm = () => {

    const matchMessageBf = /^[a-zA-Zéèêîçôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçôïûù0-9]+)*$/
    const errorMessageBf = 'Le message doit contenir des caractères valides, certains caractère spéciaux sont non autorisés.'
    
    const { saveDataToLocalStorage, deleteDataFromLocalStorage } = useContext(LocalStorageContext)
    // États pour stocker les sélections de l'utilisateur
    const [projet, setProjet] = useState('N/R')
    const [budget, setBudget] = useState('N/R')
    const [delai, setDelai] = useState('N/R')
    const [inputMessage, setValueMessage] = useState('')


    const [isVisibleForm, setIsVisibleForm] = useState(true)
    const [isVisibleDiv, setIsVisibleDiv] = useState(false)

    const scrollToAnchor = (anchorId) => {
        const anchorElement = document.getElementById(anchorId)
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (projet === 'N/R' && budget === 'N/R' && delai === 'N/R') {
            scrollToAnchor('contact__picture'); // Appel de la fonction de défilement
            handlCloseFormMessage()
        } else {
            handlOpenFormMessage()
        }
    };

    const handlOpenFormMessage = () => {
        setIsVisibleForm(false)
        setIsVisibleDiv(true)
    }

    const handlCloseFormMessage = () => {
        setIsVisibleDiv(false)
        setIsVisibleForm(true)
    }

    const saveDataLocalStorage = (e) => {
        e.preventDefault()
        if (matchMessageBf.test(document.getElementById('contenair-project-other__input').value)) {
            saveDataToLocalStorage(inputMessage, projet, delai, budget)
            handlCloseFormMessage() 
            scrollToAnchor('contact__picture')
        } 
        else {
            notifyError(errorMessageBf)
            scrollToAnchor('business-form')
        }
    }

    useEffect(() => {
        deleteDataFromLocalStorage()
    }, [])

    return (
        <>
            {isVisibleForm && <div id='business-form'>
                <ul className='labels'>
                    <li className='labels__projet'>Projet</li>
                    <li className='labels__budget'>Budget</li>
                    <li className='labels__delai'>Délai</li>
                </ul>
                <form
                    className='business-form'>
                    <div className='business-form__container'>
                        <div className='business-form__container__work'>
                            <input
                                className='work-option option'
                                type="radio"
                                value="Web"
                                name='work-option'
                                id='work-option-a'
                                checked={projet === 'Web'}
                                onChange={() => setProjet('Web')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='work-option-a'>Web
                            </label>

                            <input
                                type='radio'
                                name='work-option'
                                className='work-option option'
                                id='work-option-b'
                                value="Design"
                                checked={projet === 'Design'}
                                onChange={() => setProjet('Design')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='work-option-b'>Design
                            </label>

                            <input
                                type='radio'
                                name='work-option'
                                className='work-option option'
                                id='work-option-c'
                                value="Autre"
                                checked={projet === 'Autre'}
                                onChange={() => setProjet('Autre')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='work-option-c'>Autre
                            </label>

                            <input
                                type='radio'
                                name='work-option'
                                className='work-option option'
                                id='work-option-d'
                                value="N/R"
                                onChange={() => setProjet('N/R')}
                                defaultChecked
                            />
                            <label className='work-option--padding1'
                                htmlFor='work-option-d'>N/R
                            </label>
                        </div>

                        <div className='business-form__container__budget'>
                            <input
                                value='< 2k€'
                                type='radio'
                                checked={budget === '< 2k€'}
                                onChange={() => setBudget('< 2k€')}
                                name='budget-option'
                                className='budget-option option'
                                id='budget-option-a' />
                            <label className='work-option--padding2'
                                htmlFor='budget-option-a'>
                                <span>&lsaquo;</span> 2k€
                            </label>

                            <input
                                type='radio'
                                name='budget-option'
                                className='budget-option option'
                                id='budget-option-b'
                                value="2k€ à 6k€"
                                checked={budget === '2k€ à 6k€'}
                                onChange={() => setBudget('2k€ à 6k€')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='budget-option-b'>2k€ à 6k€
                            </label>

                            <input
                                type='radio'
                                name='budget-option'
                                className='budget-option option'
                                id='budget-option-c'
                                value="> 6k€"
                                checked={budget === '> 6k€'}
                                onChange={() => setBudget('> 6k€')}
                            />
                            <label className='work-option--padding2'
                                htmlFor='budget-option-c'>
                                <span>&rsaquo;</span> 6k€
                            </label>

                            <input
                                type='radio'
                                name='budget-option'
                                className='budget-option option'
                                id='budget-option-d'
                                defaultChecked
                                value="N/R"
                                onChange={() => setBudget('N/R')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='budget-option-d'>N/R
                            </label>
                        </div>

                        <div className='business-form__container__dead-line'>
                            <input
                                type='radio'
                                name='dead-line-option'
                                className='dead-line-option option'
                                id='dead-line-option-a'
                                value="1 mois"
                                checked={delai === '1 mois'}
                                onChange={() => setDelai('1 mois')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='dead-line-option-a'>1 mois
                            </label>

                            <input
                                type='radio'
                                name='dead-line-option'
                                className='dead-line-option option'
                                id='dead-line-option-b'
                                value="< 5 mois"
                                checked={delai === '< 5 mois'}
                                onChange={() => setDelai('< 5 mois')}
                            />
                            <label className='work-option--padding2'
                                htmlFor='dead-line-option-b'>
                                <span>&lsaquo;</span> 5 mois
                            </label>

                            <input
                                type='radio'
                                name='dead-line-option'
                                className='dead-line-option option'
                                id='dead-line-option-c'
                                value="> 5 mois"
                                checked={delai === '> 5 mois'}
                                onChange={() => setDelai('> 5 mois')}
                            />
                            <label className='work-option--padding2'
                                htmlFor='dead-line-option-c'>
                                <span>&rsaquo;</span> 5 mois
                            </label>

                            <input
                                type='radio'
                                name='dead-line-option'
                                className='dead-line-option option'
                                id='dead-line-option-d'
                                defaultChecked
                                value="N/R"

                                onChange={() => setDelai('N/R')}
                            />
                            <label className='work-option--padding1'
                                htmlFor='dead-line-option-d'>N/R
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={(e) => handleSubmit(e)}
                        name='projet-submit'
                        className='formSubmit project-submit'
                        id='project-submit'
                    >
                        Parlons-en
                    </button>
                </form>
            </div>}
            
            {isVisibleDiv && <div
                id='contenair-project-other'
                className='contenair-project-other'>
                <h2 className='contenair-project-other__title'>
                    <FontAwesomeIcon
                        onClick={handlCloseFormMessage}
                        id='other-closed'
                        className='other-closed'
                        icon={faXmark}
                    />
                    Définissez votre projet
                </h2>
                <form id='description'>
                    <label className='description'>Description</label>
                    <textarea
                        autoFocus
                        type='text'
                        className='contenair-project-other__input'
                        id='contenair-project-other__input'
                        maxLength={500}
                        rows="4" cols="50"
                        value={inputMessage}
                        onChange={(e) => setValueMessage(e.target.value)}>
                    </textarea>
                    <button
                        id='contenair-project-other__button'
                        className='contenair-project-other__button'>
                        <FontAwesomeIcon
                            onClick={saveDataLocalStorage}
                            id='other-button'
                            className='other-button'
                            icon={faCircleCheck}
                        />
                    </button>
                </form>
            </div>}
        </>
    )
}

export default BusinessForm