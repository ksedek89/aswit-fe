import Tiles from './tiles/Tiles'
import Header from './common/Header'
const Dashboard = () =>
    <div className="dashboard">
        <video width="720px" height="480px" autoPlay="autoplay" controls>
            <source src="/aswit/api/video/test.mp4" type="video/mp4"/>
        </video>
{/*        <audio  width="720px" height="480px" autoPlay="autoplay" controls>
            <source src="/aswit/api/video/test.mp4" type="audio/mp4"/>
        </audio>*/}
        <iframe src="https://widget.spreaker.com/player?episode_id=42772842&theme=light&playlist=show&playlist-continuous=true&chapters-image=true&autoplay=false&live-autoplay=true" />
        <Header/>
        <Tiles/>
    </div>

export default Dashboard;