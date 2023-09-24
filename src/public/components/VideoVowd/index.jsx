import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// video
import letsTalkAboutVDO from '../../assets/video/letsTalkAboutVDO.mp4'

// styles
import './m-videovowd.css'
import './d-videovowd.css'

const VideoVowd = () => {
  
  window.onload = () => {
		localStorage.removeItem('token')
    window.scrollTo(0, 0)
	}

  const navigate = useNavigate()

  const backToSite = () => {
    navigate('/monSite')
  }

  return (
    <div
      id='video-vowd' 
      className='video-vowd'>
        <FontAwesomeIcon
          onClick={backToSite}
          className='arrow-left'
          id='video-arrow-left'
          icon={faArrowLeft}
        />
        <h1>
            Video
        </h1>
        <div className='video-vowd__wrapper'>
            <ReactPlayer 
                className='video-vowd__wrapper__vdo'
                url={letsTalkAboutVDO}
                controls
                width='100%'
                height='100%'
            />
        </div>
    </div>
  )
}

export default VideoVowd