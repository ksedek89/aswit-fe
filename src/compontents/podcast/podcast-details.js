import '../../css/podcast/podcast-details.css'
import Header from "../header/header";
import podcast1 from '../../img/podcasts/podcast1.png'

const PodcastDetails = (props) => {
    const message = 'No results.\nPlease try another search term.';
    return (
        <div className='podcast-details'>
            <Header/>
            <div className='title-podcast'>{props.title}</div>
            <iframe className='podcast-iframe-details' src={props.url} />
            <div className='main-section'>
                <div className='container-podcast-main'>
                    <div className='text-podcast'>{props.description}</div>
                    <button className='yellow-button podcast-download-button'>Pobierz kartę</button>

                </div>
                <img className='podcast-img' src={podcast1}/>
            </div>
            <div>Sekcja komentarzy TODO</div>
       </div>
    )
}
export default PodcastDetails

