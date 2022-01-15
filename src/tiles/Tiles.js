import SingleTile from './SingleTile';
import './tile.css'
import NewsletterTile from "./NewsletterTile";
import AboutMeTile from "./AboutMeTile";
import PodcastTile from "./PodcastTile";
import BlogTile from "./BlogTile";
const Tiles = () => <section className='tilelist'>

    <AboutMeTile classname='o-mnie' />
    <PodcastTile classname={'podcasty'}/>
    <BlogTile classname={'blog'}/>
    <NewsletterTile classname={'newsletter'} />

</section>


export default Tiles;