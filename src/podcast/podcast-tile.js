import './podcast-tile.css'


const PodcastTile = (props) => {
    return (
        <div className='podacst-tile-wrapper' >
            <div className='podcast-title'>{props.title}</div>
             <iframe className='podcast-iframe' src={props.url} />
            <div className='podcast-buttons-section'>
                <button className='yellow-button'>Opis</button>
                <button className='green-button'>Dodaj Komentarz</button>
            </div>
        </div>
    )
}
export default PodcastTile

