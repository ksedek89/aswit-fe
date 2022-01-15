import './podcast.css'
import Header from "../common/Header";


const Podcast = (props) => {
    return (
        <div >
            <Header/>
            <div className={'podcast-wrapper'}>
                <h2 className='podcast-title'>Moje podcasty</h2>
                <iframe src="https://widget.spreaker.com/player?episode_id=42772842&theme=light&playlist=show&playlist-continuous=true&chapters-image=true&autoplay=false&live-autoplay=true" />
            </div>
        </div>
    )
}
export default Podcast