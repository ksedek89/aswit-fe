import '../../css/main-page/main-page.css'
import oAs from '../../img/o_as.png'
import asBlog from '../../img/as_blog.png'
import asPodcast from '../../img/as_podcast.png'
import {useNavigate} from 'react-router-dom';

const MainPage = (props) => {
    const navigate = useNavigate();
    return(
        <div>
            <div className='about-as'>
                <div>
                    <div className='about-as-label-description'>
                        Pokazuję, że świat IT nie jest taki trudny jakim go malują
                    </div>
                    <button  onClick={() => navigate('/about-as')}  className='yellow-button'>Czytaj więcej</button>
                </div>
                <img className='about-as-img' src={oAs}/>

            </div>
            <div className='podcast-as'>
                <img className='podcast-as-img' src={asPodcast}/>
                <div className='podcast-grid'>
                    <div className='podcast-as-label-description'>
                        Opowiadam oraz obalam mity o świecie IT
                    </div>
                    <button onClick={() => navigate('/podcasts')} className='green-button'>Słuchaj więcej</button>
                </div>

            </div>
            <div className='blog-as'>
                <div className='blog-as-group-panel'>
                    <div className='blog-as-label-description'>
                        Piszę o świecie IT dla tych, którzy nie mogą odsłuchać podcastu
                    </div>
                    <button onClick={() => navigate('/blog')} className='blue-button'>Czytaj więcej</button>
                </div>
                <img className='blog-as-img' src={asBlog}/>
            </div>
        </div>
    )
}

export default MainPage