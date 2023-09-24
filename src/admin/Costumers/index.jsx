import { Link, useNavigate } from 'react-router-dom'
import { memo, useContext, useEffect, useState } from 'react'
import { faArrowLeft, faPowerOff, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from '../../context/AuthContext'
import { ProjectContext } from '../../context/ProjetContext'
import { Loader } from '../../functions/loader/Loader'
import { notifyInfo } from '../../context/Notify'

// styles
import './m-costumers.css'
import './d-costumers.css'

const Costumers = () => {

  const { isAuthenticated, logout } = useContext(AuthContext);
  const { projets, fetchProjets, handleDeleteProjet, isLoading, setIsLoading } = useContext(ProjectContext)

  const navigate = useNavigate()

  const backToLogin = () => {
    navigate('/dashboard')
    notifyInfo('Vous avez été déconnecté !')
  }

  const [confirmVisible, setConfirmVisible] = useState({})

  const logoutUser = () => {
    logout()
    backToLogin()
  }

  useEffect(() => {
    if (isAuthenticated && projets.lentgh === undefined) {
      fetchProjets()
      setIsLoading(false)
    }
  }, [isAuthenticated, isLoading])

  const handleIconClick = (itemId) => {
    setConfirmVisible((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  }

  const deleteProjetById = (id) => {
    handleDeleteProjet(id)
    handleIconClick()
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className='costumers'>
      <h1 className='costumers__title'>Clients</h1>
      <FontAwesomeIcon
        onClick={backToLogin}
        className='arrow-left'
        id='arrow-left'
        icon={faArrowLeft}
      />
      <span className='logout' onClick={logoutUser}>
        <FontAwesomeIcon
          className='logout__btn'
          icon={faPowerOff}
        />
      </span>

      {projets && projets.length > 0 ? (
        projets.map((item, id) => (
          <li className='costumers__card' id={`id-${id}`} key={id}>
            <div className='icons-delete'>
              <FontAwesomeIcon
                onClick={() => handleIconClick(item._id)}
                className={`x-delete ${confirmVisible[item._id] ? 'confirm-hidden' : ''}`}
                icon={faXmark}
              />
              <FontAwesomeIcon
                onClick={() => deleteProjetById(item._id)}
                className={`x-delete icon-delete ${confirmVisible[item._id] ? '' : 'confirm-hidden'}`}
                icon={faTrash}
              />
              <FontAwesomeIcon
                onClick={() => handleIconClick(item._id)}
                className={`x-delete icon-back ${confirmVisible[item._id] ? '' : 'confirm-hidden'}`}
                icon={faArrowLeft}
              />
            </div>
            <Link to={`/dashboard/card/${item._id}`} className='link-card'>
              <p className='costumers__card__info'>Société : {item.society}</p>
              <p className='costumers__card__info'>Le {new Date(item.createdDate).toLocaleDateString("en-GB")} à {new Date(item.createdDate).getHours()}h:{new Date(item.createdDate).getMinutes()}</p>
            </Link>
          </li>
        ))
      ) : (
        <div className='no-data'>Pas de Projet</div>
      )}
    </section>
  )
}

export default memo(Costumers)