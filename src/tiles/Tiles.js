import SingleTile from './SingleTile';
import './tile.css'
const Tiles = () => <section className='tilelist'>

    <SingleTile classname='o-mnie' src="https://images-na.ssl-images-amazon.com/images/I/91AbZ7RgrEL._AC_UL116_SR116,116_.jpg" title="O mnie" author="AS"/>
    <SingleTile classname={'blog'} src="https://images-na.ssl-images-amazon.com/images/I/71OVhh1gtNL._AC_UL116_SR116,116_.jpg"  title="Blog" author="AS"/>
    <SingleTile classname={'spolecznosc'} src="https://images-na.ssl-images-amazon.com/images/I/A1yBsQy0X3L._AC_UL116_SR116,116_.jpg"  title="Społeczność" author="AS"/>
    <SingleTile classname={'podcasty'} src="https://images-na.ssl-images-amazon.com/images/I/71-llhQmneL._AC_UL116_SR116,116_.jpg"  title="Podcasty" author="AS"/>
    <SingleTile classname={'kursy'} src="https://images-na.ssl-images-amazon.com/images/I/71PpgGETwcL._AC_UL116_SR116,116_.jpg"  title="Kursy" author="AS"/>

</section>


export default Tiles;