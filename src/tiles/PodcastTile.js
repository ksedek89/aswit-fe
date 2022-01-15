import './podcast.css'
import {useNavigate} from 'react-router-dom';

const PodcastTile = (props) => {
    const navigate = useNavigate();

    function goToPodcast() {
        navigate('/podcast')
    }


    return  (
        <div  className={"tile " +  (props.classname || "")}>
            <div className='podcast-content'>
                <h2 className='podcast-title'>Moje podcasty</h2>
                <hr className={"horizontal-line"}/>
                <iframe src="https://widget.spreaker.com/player?show_id=5311421&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"  width="100%" height="200px" frameBorder="0"></iframe>
                <button onClick={() => goToPodcast()} >Zobacz więcej</button>
            </div>

        </div>
    )
}


export default PodcastTile