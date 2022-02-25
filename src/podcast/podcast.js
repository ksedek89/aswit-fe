import './podcast.css'
import Header from "../header/header";
import PodcastTile from "./podcast-tile";
import podcast from '../img/podcast.png'

const Podcast = (props) => {
    return (
        <div className='podcast-div'>
            <Header/>
            <img className='img-podcast' src={podcast}/>
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=47923138&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true' />
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=47923138&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true' />
            <PodcastTile title='Podcast # 10 - zamknięcie pierwszego sezonu' url='https://widget.spreaker.com/player?episode_id=47923138&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true' />
        </div>
    )
}
export default Podcast

