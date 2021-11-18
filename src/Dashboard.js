import './index.css';

export const SingleTile = (props) =>
    <div className='tile'>
        <img src={props.src}></img>
        <h1>{props.title}</h1>
        <h4>Autor: {props.author}</h4>
    </div>

export const Tiles = () => <section className='tilelist'>
    <SingleTile src="https://images-na.ssl-images-amazon.com/images/I/91AbZ7RgrEL._AC_UL116_SR116,116_.jpg" title="O mnie" author="AS"/>
    <SingleTile src="https://images-na.ssl-images-amazon.com/images/I/71OVhh1gtNL._AC_UL116_SR116,116_.jpg"  title="Blog" author="AS"/>
    <SingleTile src="https://images-na.ssl-images-amazon.com/images/I/A1yBsQy0X3L._AC_UL116_SR116,116_.jpg"  title="Społeczność" author="AS"/>
    <SingleTile src="https://images-na.ssl-images-amazon.com/images/I/71-llhQmneL._AC_UL116_SR116,116_.jpg"  title="Podcasty" author="AS"/>
    <SingleTile src="https://images-na.ssl-images-amazon.com/images/I/71PpgGETwcL._AC_UL116_SR116,116_.jpg"  title="Kursy" author="AS"/>
</section>