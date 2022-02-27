import '../../css/podcast/podcast.css'
import Header from "../header/header";
import PodcastTile from "./podcast-tile";
import podcast from '../../img/podcast.png'
import {useEffect, useState} from "react";
import axios from "axios";

const Podcast = (props) => {
    const url = '/aswit/api/podcast';
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            setPodcasts(res.data);
        })
    }, [])
    return(
    <div className='podcast-div'>
        <Header/>
        <img alt="" className='img-podcast' src={podcast}/>
        {podcasts.map(podcast => <PodcastTile podcastId={podcast.id} key={podcast.id} title={podcast.title} url={podcast.url} />)}
     </div>
    )
}
export default Podcast

