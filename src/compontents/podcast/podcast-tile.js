import '../../css/podcast/podcast-tile.css'
import {useNavigate} from "react-router-dom";


const PodcastTile = (props) => {
    const navigate = useNavigate();
    return (
        <div className='podacst-tile-wrapper' >
            <div className='podcast-title'>{props.title}</div>
            {props.title}
             <iframe title={props.title} className='podcast-iframe' src={props.url} />
            <div className='podcast-buttons-section'>
                <button  onClick={() => navigate('/podcast-details/'+props.podcastId)}  className='yellow-button'>Opis</button>
                <button className='green-button'>Dodaj Komentarz</button>
            </div>
        </div>
    )
}
export default PodcastTile

