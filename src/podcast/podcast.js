import './podcast.css'
import Header from "../header/header";
import PodcastTile from "./podcast-tile";
import podcast from '../img/podcast.png'

const Podcast = (props) => {
    return (
        <div className='podcast-div'>
            <Header/>
            <img className='img-podcast' src={podcast}/>
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=42772842&theme=light&playlist=show&playlist-continuous=true&chapters-image=true&autoplay=false&live-autoplay=true' />
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=42772842&theme=light&playlist=show&playlist-continuous=true&chapters-image=true&autoplay=false&live-autoplay=true' />
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=42772842&theme=light&playlist=show&playlist-continuous=true&chapters-image=true&autoplay=false&live-autoplay=true' />
        </div>
    )
}
export default Podcast

