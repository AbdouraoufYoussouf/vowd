import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { faArrowLeft, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../context/ProjetContext'
import { AuthContext } from '../../context/AuthContext'


// styles
import './m-card.css'
import './d-card.css'

const Card = () => {
  const { projets, fetchProjets } = useContext(ProjectContext)
  const { logout } = useContext(AuthContext)

  const { id } = useParams()
  const navigate = useNavigate()

  const [costumerCard, setCostumerCard] = useState(null)

  useEffect(() => {
    if (!costumerCard) {
      fetchProjets();
    }
    // Recherchez le projet correspondant dans la liste des projets
    const foundProject = projets.find((project) => project._id === id)
    if (foundProject) {
      setCostumerCard(foundProject)
    }
  }, [projets, id])

  const backToWebSite = () => navigate('/dashboard/costumers')

  const logoutUser = () => {
    logout()
    navigate('/dashboard')
  }
  return (
    <section className="card">
      <h1 className="card__title">Carte</h1>
      <FontAwesomeIcon
        onClick={backToWebSite}
        className="arrow-left"
        icon={faArrowLeft}
      />
      <span className="logout" onClick={logoutUser}>
        <FontAwesomeIcon className="logout__btn" icon={faPowerOff} />
      </span>
      {costumerCard && (
        <div className="card__container">
          <p className="card__container__info card__society">
            {costumerCard.society}
          </p>
          <p className="card__container__info">
            <strong>Siret :</strong> {costumerCard.siret}
          </p>
          <p className="card__container__info">
            <strong>Nom :</strong> {costumerCard.firstName}
          </p>
          <p className="card__container__info">
            <strong>Prénom :</strong> {costumerCard.lastName}
          </p>
          <p className='card__container__info'>
            <strong>Email :</strong> <a href={`mailto:${costumerCard.email}`}>{costumerCard.email}</a>
          </p>
          <p className="card__container__info">
            <strong>Projet :</strong> {costumerCard.projet}
          </p>
          <p className="card__container__info">
            <strong>Budget :</strong> {costumerCard.budget}
          </p>
          <p className="card__container__info">
            <strong>Délai :</strong> {costumerCard.delai}
          </p>
          <p className="card__container__info">
            <strong>Message :</strong> {costumerCard.message}
          </p>
          <p className="card__container__info">
            <strong>Le :</strong>  {new Date(costumerCard.createdDate).toLocaleDateString("en-GB")} à {new Date(costumerCard.createdDate).getHours()}h:{new Date(costumerCard.createdDate).getMinutes()}
          </p>
        </div>
      )}
    </section>
  )
}

export default Card
