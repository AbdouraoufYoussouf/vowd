import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'

import { createProjet, getProjetByEmail } from '../../services/projetServices'
import ModalConfirmation from '../Modals/ModalConfirmation '
import { validationSchema } from './ValidationShema'
import { LocalStorageContext } from '../../context/LocalStorageContext'
import { notifyError, notifySuccess } from '../../context/Notify'

import './m-contact-form.css'
import './d-contact-form.css'

const ContactForm = () => {
  const { isReload, setIsReload, deleteDataFromLocalStorage, localData, getDataFromLocalStorage } = useContext(LocalStorageContext)

  const [isOpen1, setIsOpen1] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmUpdate, setConfirmUpdate] = useState(false)
  const [newProjetData, setNewProjetData] = useState(null)
  const [errors, setErrors] = useState([])

  const [selectedProjet, setSelectedProjet] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedDelai, setSelectedDelai] = useState('')
  const [message, setMessage] = useState('')

  const togglePage = (page1) => {
    setIsOpen1(page1);
    document.getElementById('form__page1').style.display = page1 ? 'block' : 'none'
    document.getElementById('form__page2').style.display = page1 ? 'none' : 'block'
  }
 

  const formik = useFormik({
    initialValues: {
      society: '',
      siret: '',
      firstName: '',
      lastName: '',
      email: '',
      projet: '',
      budget: '',
      delai: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const projetData = {
        ...values,
        message: message ? message : values.message,
        projet: selectedProjet,
        budget: selectedBudget,
        delai: selectedDelai,
      };

      await handleExist(values.email, projetData);
      deleteDataFromLocalStorage()
    },
  });

  const handleExist = async (email, projetData) => {
    const exist = await getProjetByEmail(email)
    if (exist.status === 200) {
      console.log('exist:', exist.data)
      setConfirmUpdate(true)
      setNewProjetData(projetData)
      handleOpenModal()
    } else {
      handlSubmitProjet(projetData)
    }
  };

  const handlSubmitProjet = async (projetData) => {
    try {
      const result = await createProjet(projetData)
      if (result.success) {
        notifySuccess(result.data.message);
        handleFormReset();
      } else {
        console.log(result)
        setErrors(result.errorMessages)
        console.error('La création du projet a échoué.')
      }
      if (!result) { notifyError('Pas de reponse du serveur') }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la création du projet :', error)
    }
  };

  const onChangeColor = (e) => {
    if (e.target === document.activeElement) {
      e.target.style.backgroundColor = 'white'
    }
  };

  const onFocusColor = (e) => {
    e.target.style.backgroundColor = 'white'
  };

  const onBlurColor = (e) => {
    if (e.target.value !== '') {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = 'rgba(0, 62, 88, 0.4)'
    }
  };

  const onBlurErrorField = (fieldName) => {
    const fieldElement = document.getElementById(fieldName)
    if (fieldElement && fieldElement.style.backgroundColor === 'rgba(0, 62, 88, 0.4)') {
      formik.touched[fieldName] = null
      formik.errors[fieldName] = null
    }
  }

  const resetFieldsAndStyles = (fieldNames, backgroundColor) => {
    formik.resetForm();
    setSelectedProjet('N/R')
    setSelectedBudget('N/R')
    setSelectedDelai('N/R')

    fieldNames.forEach((fieldName) => {
      const fieldElement = document.getElementById(fieldName)
      if (fieldElement) {
        fieldElement.style.backgroundColor = backgroundColor
      }
    });
  };

  const handleFormReset = () => {
    const fieldNames = ['society', 'siret', 'firstName', 'lastName', 'email', 'message']
    resetFieldsAndStyles(fieldNames, 'rgba(0, 62, 88, 0.4)')
    togglePage(!isOpen1)
  };

  const handleOpenModal = () => {
    setIsModalOpen(true)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  };

  const handleConfirmAction = () => {
    if (confirmUpdate) {
      handlSubmitProjet(newProjetData);
      console.log('new:', newProjetData)
      setConfirmUpdate(false)
    }
    handleCloseModal()
  };

   // Recharger le composant pour obtenir les données du local storage apres 3 secondes
   setTimeout(() => {
    setIsReload(!isReload)
  }, 3000)

  useEffect(() => {

    getDataFromLocalStorage()
      if(localData.projet !== 'N/R' || localData.budget !== 'N/R' || localData.delai!=='N/R' || localData.message!== ''){
        setSelectedBudget(localData.budget)
        setSelectedProjet(localData.projet)
        setSelectedDelai(localData.delai)
        setMessage(localData.message)
    }

    if (localData.message) {
      document.getElementById('message').style.backgroundColor = 'white'
    }
  }, [isReload])

  const deletMessage = async () => {
    localStorage.removeItem('message')
  }

  return (
    <Fragment >
      <ModalConfirmation
        isOpen={isModalOpen}
        message="Vous avez déjà un projet avec cette email, Voulez-vous modifier le projet?"
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
      />

      <form
        onSubmit={formik.handleSubmit}
        id='form'
        className='form form-contact'
        name='contact'
        method='post'
      >
        <div
          id='form__page1'
          className='form__page1'
          style={{ display: isOpen1 ? 'block' : 'none' }}
        >
          <div className='form-group'>
            <label htmlFor='society'>Société</label>
            <input
              onChange={(e) => {
                formik.handleChange(e)
                onChangeColor(e);
              }}
              onBlur={(e) => {
                formik.handleBlur(e)
                onBlurColor(e);
                onBlurErrorField('society')
              }}
              onFocus={(e) => {
                formik.handleBlur(e)
                onFocusColor(e)
              }}
              id='society'
              type='text'
              name='society'
              placeholder='Société*'
              className='form-control'
              aria-label='société'
              value={formik.values.society}
            />
            {formik.touched.society && formik.errors.society ? (
              <span className='error-message'>{formik.errors.society}</span>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='siret'>Siret</label>
            <input
              onChange={(e) => { formik.handleChange(e); onChangeColor(e) }}
              onBlur={(e) => { formik.handleBlur(e); onBlurColor(e); onBlurErrorField('siret') }}
              onFocus={(e) => { formik.handleBlur(e); onFocusColor(e) }}
              id='siret'
              type='text'
              name='siret'
              placeholder='Siret*'
              className='form-control'
              aria-label='siret'
              required
              value={formik.values.siret}
            />
            {formik.touched.siret && formik.errors.siret ? (
              <span className='error-message'>{formik.errors.siret}</span>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='firstName'>Prénom</label>
            <input
              onChange={(e) => {
                formik.handleChange(e)
                onChangeColor(e)
              }}
              onBlur={(e) => {
                formik.handleBlur(e)
                onBlurColor(e)
                onBlurErrorField('firstName')
              }}
              onFocus={(e) => {
                formik.handleBlur(e)
                onFocusColor(e)
              }}
              id='firstName'
              type='text'
              name='firstName'
              placeholder='Prénom*'
              className='form-control'
              aria-label='firstName'
              required
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className='error-message'>{formik.errors.firstName}</span>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='lastName'>Nom</label>
            <input
              onChange={(e) => {
                formik.handleChange(e)
                onChangeColor(e)
              }}
              onBlur={(e) => {
                formik.handleBlur(e)
                onBlurColor(e)
                onBlurErrorField('lastName')
              }}
              onFocus={(e) => {
                formik.handleBlur(e)
                onFocusColor(e)
              }}
              id='lastName'
              type='text'
              name='lastName'
              placeholder='Nom*'
              className='form-control'
              aria-label='lastName'
              required
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <span className='error-message'>{formik.errors.lastName}</span>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={(e) => {
                formik.handleChange(e)
                onChangeColor(e)
              }}
              onBlur={(e) => {
                formik.handleBlur(e)
                onBlurColor(e);
                onBlurErrorField('email')
              }}
              onFocus={(e) => {
                formik.handleBlur(e)
                onFocusColor(e)
              }}
              id='email'
              type='text'
              name='email'
              placeholder='Email*'
              className='form-control'
              aria-label='email'
              required
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className='error-message'>{formik.errors.email}</span>
            ) : null}
          </div>

          <button
            type='button'
            id='form__next'
            onClick={() => togglePage(!isOpen1)}
            className={`formModal form__next ${(formik.errors.email || !formik.values.email) ||
              (formik.errors.lastName || !formik.values.lastName) ||
              (formik.errors.firstName || !formik.values.firstName) ||
              (formik.errors.society || !formik.values.society) ||
              (formik.errors.siret || !formik.values.siret)
              ? 'disabled'
              : 'abled'
              }`}
            disabled={
              (formik.errors.email || !formik.values.email) ||
              (formik.errors.lastName || !formik.values.lastName) ||
              (formik.errors.firstName || !formik.values.firstName) ||
              (formik.errors.society || !formik.values.society) ||
              (formik.errors.siret || !formik.values.siret)
            }
          >
            Suivant
          </button>
        </div>
        <div
          id='form__page2'
          className='form__page2'
          style={{ display: isOpen1 ? 'none' : 'block' }}
        >
          <div className='form-group'>
            <label id='select-label-projet' htmlFor='projet'>Projet</label>

            <select
              onChange={(e) => {
                onChangeColor(e);
                setSelectedProjet(e.target.value)
              }}
              onBlur={(e) => {
                onBlurColor(e);
                setSelectedProjet(e.target.value)
              }}
              onFocus={(e) => {
                onFocusColor(e)
              }}
              id='projet'
              type='select'
              name='projet'
              aria-label='projet'
              className='form-control'
              value={selectedProjet}
            >
              <option value='N/R'>N/R</option>
              <option value='Web'>Web</option>
              <option value='Design'>Design</option>
              <option value='Autre'>Autre</option>
            </select>
          </div>

          <div className='form-group'>
            <label id='select-label-budget' htmlFor='budget'>Budget en K€</label>
            <select
              onChange={(e) => {
                onChangeColor(e)
                setSelectedBudget(e.target.value)
              }}
              onBlur={(e) => {
                onBlurColor(e)
                setSelectedBudget(e.target.value)
              }}
              onFocus={(e) => {
                onFocusColor(e)
              }}
              id='budget'
              type='select'
              name='budget'
              aria-label='budget'
              className='form-control'
              value={selectedBudget}
            >
              <option value='N/R'>N/R</option>
              <option value='< 2k€'>&lt; 2k€</option>
              <option value='2k€ à 6k€'>2k€ à 6k€</option>
              <option value='> 6k€'>&gt; 6k€</option>
            </select>
          </div>

          <div className='form-group'>
            <label id='select-label-delai' htmlFor='delai'>Délai en mois</label>
            <select
              onChange={(e) => {
                onChangeColor(e)
                setSelectedDelai(e.target.value)
              }}
              onBlur={(e) => {
                onBlurColor(e)
                setSelectedDelai(e.target.value)
              }}
              onFocus={(e) => {
                onFocusColor(e)
              }}
              id='delai'
              type='select'
              name='delai'
              aria-label='delai'
              className='form-control'
              value={selectedDelai}
            >
              <option value='N/R'>N/R</option>
              <option value='1 mois'>1 mois</option>
              <option value='< 5 mois'>&lt; 5 mois</option>
              <option value='> 5 mois'>&gt; 5 mois</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              onChange={(e) => {
                deletMessage(e)
                formik.handleChange(e)
                onChangeColor(e)
              }}
              onBlur={(e) => {
                formik.handleBlur(e)
                onBlurColor(e)
                onBlurErrorField('message')
              }}
              onFocus={(e) => {
                formik.handleBlur(e)
                onFocusColor(e)
              }}
              id='message'
              name='message'
              placeholder='Message'
              className='form-control'
              aria-label='message'
              type='text'
              rows='4'
              cols='50'
              maxLength={500}
              value={localData.message ? message : formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <span className='error-message'>{formik.errors.message}</span>
            ) : null}
          </div>

          <ul>
            {errors &&
              errors.map((err, index) => (
                <li key={index} className='error-message' > {err} </li>
              ))
            }

          </ul>

          <button
            className='formSubmit contact-submit'
            type='submit'
          >
            Envoyer
          </button>
          <div onClick={() => togglePage(!isOpen1)} className='formModal form__previous abled'>
            Précédent
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm