import SingleTile from './SingleTile';
import './tile.css'
import NewsletterTile from "./NewsletterTile";
import AboutMeTile from "./AboutMeTile";
const Tiles = () => <section className='tilelist'>

    <AboutMeTile classname='o-mnie' />
    <SingleTile classname={'blog'} src="https://images-na.ssl-images-amazon.com/images/I/71OVhh1gtNL._AC_UL116_SR116,116_.jpg"  title="Blog" author="AS"/>
    <SingleTile classname={'podcasty'} src="https://images-na.ssl-images-amazon.com/images/I/71-llhQmneL._AC_UL116_SR116,116_.jpg"  title="Podcasty" author="AS"/>
    <NewsletterTile classname={'newsletter'} />

</section>


export default Tiles;